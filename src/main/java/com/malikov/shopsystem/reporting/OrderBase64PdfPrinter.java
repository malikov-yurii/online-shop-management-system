package com.malikov.shopsystem.reporting;

import com.malikov.shopsystem.domain.Order;
import com.malikov.shopsystem.domain.OrderLine;
import com.malikov.shopsystem.dto.OrderLineReportDto;
import com.malikov.shopsystem.exception.ApplicationException;
import lombok.extern.slf4j.Slf4j;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.apache.commons.lang3.StringUtils;
import org.springframework.core.io.Resource;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.function.Function;

@Slf4j
public class OrderBase64PdfPrinter {

    private static final String CUSTOMER_NAME = "customerName";
    private static final String CUSTOMER_PHONE_NUMBER = "customerPhoneNumber";
    private static final String DESTINATION = "destination";
    private static final String TOTAL_ORDER_AMOUNT = "totalOrderAmount";
    private static final String PAYMENT_TYPE = "paymentType";

    private final JasperReport template;

    public OrderBase64PdfPrinter(Resource templateResource) {
        try {
            template = JasperCompileManager.compileReport(templateResource.getInputStream());
        } catch (JRException e) {
            throw new ApplicationException("Failed compiling order report template.");
        } catch (IOException e) {
            throw new ApplicationException("Failed reading order report template from resource.");
        }
    }

    public String print(Order order) {
        return Base64.getEncoder().encodeToString(generatePdfReport(order));
    }

    private byte[] generatePdfReport(Order order) {
        try {
            return JasperExportManager.exportReportToPdf(generateReport(order));
        } catch (JRException e) {
            throw new ApplicationException("Failed generating order report pdf.");
        }
    }

    private JasperPrint generateReport(Order order) {
        Map<String, Object> orderData = orderData(order);
        JRBeanCollectionDataSource orderLinesData = orderLinesData(order.getOrderLines());
        try {
            return JasperFillManager.fillReport(template, orderData, orderLinesData);
        } catch (JRException e) {
            throw new ApplicationException("Failed filling order report template.", e);
        }
    }

    private Map<String, Object> orderData(Order order) {
        Map<String, Object> parameters = new HashMap<>();
        parameters.put(CUSTOMER_NAME, customerName(order));
        parameters.put(CUSTOMER_PHONE_NUMBER, customerPhoneNumber(order));
        parameters.put(DESTINATION, shippingDestination(order));
        parameters.put(TOTAL_ORDER_AMOUNT, order.getTotalSum());
        parameters.put(PAYMENT_TYPE, order.getPaymentType().toString());
        return parameters;
    }

    private JRBeanCollectionDataSource orderLinesData(List<OrderLine> orderLines) {
        List<OrderLineReportDto> orderLineReportDtos = toOrderLineReportDtos(orderLines);
        return new JRBeanCollectionDataSource(orderLineReportDtos);
    }

    private String customerName(Order order) {
        return Optional.ofNullable(order.getCustomerFirstName())
                .map(firstName -> order.getCustomerLastName() + " " + firstName)
                .orElse(order.getCustomerLastName());
    }

    private String customerPhoneNumber(Order order) {
        return Optional.ofNullable(order.getCustomerPhoneNumber())
                .filter(StringUtils::isNotBlank)
                .map(formatPhoneNumber())
                .orElse(StringUtils.EMPTY);
    }

    private Function<String, String> formatPhoneNumber() {
        return phoneNumber -> String.format("+38(%s)%s-%s-%s", phoneNumber.substring(0,3), phoneNumber.substring(3,5),
                                                               phoneNumber.substring(5,7), phoneNumber.substring(7));
    }

    private String shippingDestination(Order order) {
        return Optional.ofNullable(order.getDestinationPostOffice())
                .map(postOffice -> order.getDestinationCity() + ", " + postOffice)
                .orElse(order.getDestinationCity());
    }

    private List<OrderLineReportDto> toOrderLineReportDtos(List<OrderLine> orderLines) {
        List<OrderLineReportDto> result = new ArrayList<>();
        List<OrderLine> listOrderLines = Optional.ofNullable(orderLines).orElse(Collections.emptyList());
        for (int i = 0; i < listOrderLines.size(); i++) {
            result.add(toOrderLineReportDto(i, listOrderLines.get(i)));
        }
        return result;
    }

    private OrderLineReportDto toOrderLineReportDto(int i, OrderLine orderLine) {
        OrderLineReportDto orderLineReportDto = new OrderLineReportDto();
        orderLineReportDto.setOrderLineIndex(i + 1);
        orderLineReportDto.setName(orderLine.getProductName());
        orderLineReportDto.setQuantity(orderLine.getProductQuantity());
        orderLineReportDto.setItemValue(orderLine.getProductPrice());
        orderLineReportDto.setOrderLineValue(orderLineTotalValue(orderLine));

        return orderLineReportDto;
    }

    private BigDecimal orderLineTotalValue(OrderLine orderLine) {
        return Objects.nonNull(orderLine.getProductPrice()) && Objects.nonNull(orderLine.getProductQuantity())
                ? orderLine.getProductPrice().multiply(BigDecimal.valueOf(orderLine.getProductQuantity()))
                : null;
    }

}
