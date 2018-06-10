package com.malikov.shopsystem.util;

import com.malikov.shopsystem.domain.Product;
import com.malikov.shopsystem.domain.ProductVariation;

import java.math.BigDecimal;
import java.math.RoundingMode;

import static java.math.RoundingMode.HALF_UP;

public final class CalculateProductPriceUtil {

    private CalculateProductPriceUtil() {
    }

    public static BigDecimal calculateProductVariationPrice(ProductVariation productVariation) {
        return calcPrice(productVariation.getPrice(), productVariation.getProduct().getCurrency().getCurrencyRate())
                .setScale(0, HALF_UP);
    }

    public static BigDecimal calculateProductPrice(Product product) {
        return calcPrice(product.getPrice(), product.getCurrency().getCurrencyRate()).setScale(0, HALF_UP);
    }

    private static BigDecimal calcPrice(BigDecimal price, BigDecimal currencyRate) {
        return price.divide(currencyRate, 0, RoundingMode.HALF_UP);
    }

}
