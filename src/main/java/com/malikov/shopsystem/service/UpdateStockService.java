package com.malikov.shopsystem.service;

import com.malikov.shopsystem.domain.Order;
import com.malikov.shopsystem.domain.OrderLine;
import com.malikov.shopsystem.domain.Product;
import com.malikov.shopsystem.domain.ProductAggregator;
import com.malikov.shopsystem.domain.ProductVariation;
import com.malikov.shopsystem.enumtype.OrderStatus;
import com.malikov.shopsystem.enumtype.StockUpdateOperation;
import com.malikov.shopsystem.repository.ProductAggregatorRepository;
import com.malikov.shopsystem.repository.ProductRepository;
import com.malikov.shopsystem.repository.ProductVariationRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Service
public class UpdateStockService {

    private static final Set<OrderStatus> WITHDRAWAL_STATUSES =
            new HashSet<>(Arrays.asList(OrderStatus.OK, OrderStatus.SHP, OrderStatus.WFP));
    private static final int DECREASE = -1;

    private final ProductRepository productRepository;
    private final ProductVariationRepository productVariationRepository;
    private final ProductAggregatorRepository productAggregatorRepository;

    public UpdateStockService(ProductRepository productRepository,
                              ProductVariationRepository productVariationRepository,
                              ProductAggregatorRepository productAggregatorRepository) {
        this.productRepository = productRepository;
        this.productVariationRepository = productVariationRepository;
        this.productAggregatorRepository = productAggregatorRepository;
    }

    @Transactional
    public void updateStockDependingOnNewStatus(Order order, OrderStatus newStatus) {
        OrderStatus oldStatus = order.getStatus();
        if (stockShouldBeUpdated(newStatus, oldStatus)) {
            updateStock(order, newStatus, oldStatus);
        }
    }

    private boolean stockShouldBeUpdated(OrderStatus newStatus, OrderStatus oldStatus) {
        return !(newStatus.equals(oldStatus) || (isWithdrawalStatus(newStatus) == isWithdrawalStatus(oldStatus)));
    }

    private boolean isWithdrawalStatus(OrderStatus status) {
        return WITHDRAWAL_STATUSES.contains(status);
    }

    private void updateStock(Order order, OrderStatus newStatus, OrderStatus oldStatus) {
        if (stockShouldBeDecreased(newStatus, oldStatus)) {
            updateAllProductsBoundedToOrderLinesStock(order, StockUpdateOperation.DECREASE_STOCK);
        } else {
            updateAllProductsBoundedToOrderLinesStock(order, StockUpdateOperation.INCREASE_STOCK);
        }
    }

    private boolean stockShouldBeDecreased(OrderStatus newStatus, OrderStatus oldStatus) {
        return isNotWithdrawalStatus(oldStatus) && isWithdrawalStatus(newStatus);
    }

    private boolean isNotWithdrawalStatus(OrderStatus status) {
        return !isWithdrawalStatus(status);
    }

    private void updateAllProductsBoundedToOrderLinesStock(Order order, StockUpdateOperation dbOperation) {
        for (OrderLine orderLine : order.getOrderLines()) {
            if (noProductIsBoundToOrderLine(orderLine)) {
                continue;
            }
            updaterProductBoundedToOrderLineStock(orderLine, productQuantityDelta(dbOperation, orderLine));
        }
    }

    private boolean noProductIsBoundToOrderLine(OrderLine orderLine) {
        return Objects.isNull(orderLine.getProduct());
    }

    private int productQuantityDelta(StockUpdateOperation dbOperation, OrderLine orderLine) {
        return dbOperation == StockUpdateOperation.INCREASE_STOCK
                ? orderLine.getProductQuantity()
                : orderLine.getProductQuantity() * (-1);
    }

    private void updaterProductBoundedToOrderLineStock(OrderLine orderLine, Integer productQuantityDelta) {
        if (Objects.nonNull(orderLine.getProductVariation())) {
            updateProductVariationStock(orderLine, productQuantityDelta);
        } else if (Objects.nonNull(orderLine.getProduct())) {
            updateProductStock(orderLine, productQuantityDelta);
        }
    }

    private void updateProductVariationStock(OrderLine orderLine, Integer productQuantityDelta) {
        ProductVariation productVariation = orderLine.getProductVariation();

        if (Objects.isNull(productVariation.getProductAggregator())) {
            updateNotAggregatedProductVariationStock(productQuantityDelta, productVariation);
        } else {
            updateProductAggregatorStock(productQuantityDelta, orderLine);
        }
    }

    private void updateNotAggregatedProductVariationStock(Integer productQuantityDelta,
                                                          ProductVariation productVariation) {
        productVariation.setQuantity(productVariation.getQuantity() + productQuantityDelta);
        productVariationRepository.save(productVariation);
    }

    private void updateProductAggregatorStock(Integer productQuantityDelta, OrderLine orderLine) {
        ProductAggregator aggregator = orderLine.getProductVariation().getProductAggregator();
        aggregator.setQuantity(calcAggregatorStock(orderLine, productQuantityDelta));
        productAggregatorRepository.save(aggregator);
    }

    private int calcAggregatorStock(OrderLine orderLine, Integer productQuantityDelta) {
        switch (orderLine.getProductVariation().getProductAggregator().getProductAggregatorType()) {
            case SIMPLE:
                return calcSimpleAggregatorStock(orderLine, productQuantityDelta);
            case PG_GLUE:
                return calcPG5AggregatorStock(orderLine, productQuantityDelta);
            case WIRE:
                return calcWireAggregatorStock(orderLine, productQuantityDelta);
            default:
                throw new RuntimeException("Only SIMPLE, PG_GLUE, WIRE aggregator types supported.");
        }
    }

    private int calcPG5AggregatorStock(OrderLine orderLine, Integer productQuantityDelta) {
        return orderLine.getProductVariation().getProductAggregator().getQuantity()
                + calcPG5AggregatorDelta(orderLine) * productQuantityDelta;
    }

    private Integer calcPG5AggregatorDelta(OrderLine orderLine) {
        Integer result = orderLine.getProductVariation().getVariationValue().getValueAmount();
        Product pgProduct = orderLine.getProduct();
        double pg5Coefficient = pg5Coefficient(pgProduct);

        return (int) (result * pg5Coefficient);
    }

    private double pg5Coefficient(Product pgProduct) {
        return pgProduct.getWeight().doubleValue();
    }

    private int calcWireAggregatorStock(OrderLine orderLine, Integer productQuantityDelta) {
        ProductVariation productVariation = orderLine.getProductVariation();
        Integer productWireWeight = productVariation.getWeight().intValue();

        return productVariation.getProductAggregator().getQuantity() + productWireWeight * productQuantityDelta;
    }

    private int calcSimpleAggregatorStock(OrderLine orderLine, Integer productQuantityDelta) {
        ProductVariation productVariation = orderLine.getProductVariation();
        ProductAggregator aggregator = productVariation.getProductAggregator();

        return aggregator.getQuantity() + productVariation.getVariationValue().getValueAmount() * productQuantityDelta;
    }

    private void updateProductStock(OrderLine orderLine, Integer productQuantityDelta) {
        Product product = orderLine.getProduct();
        product.setQuantity(product.getQuantity() + productQuantityDelta);
        productRepository.save(product);
    }

    @Transactional
    public void updateStock(OrderLine orderLine, int productQuantityDelta) {
        if (isWithdrawalStatus(orderLine.getOrder().getStatus())) {
            updaterProductBoundedToOrderLineStock(orderLine, productQuantityDelta);
        }
    }

    @Transactional
    public void returnToStock(OrderLine orderLine) {
        updateStock(orderLine, orderLine.getProductQuantity());
    }

    @Transactional
    public void updateStockForDeletedOrder(Order order) {
        if (isWithdrawalStatus(order.getStatus())) {
            updateAllProductsBoundedToOrderLinesStock(order, StockUpdateOperation.INCREASE_STOCK);
        }
    }

    public void decreaseStock(OrderLine orderLine, Integer stock) {
        updateStock(orderLine, DECREASE * stock);
    }

}
