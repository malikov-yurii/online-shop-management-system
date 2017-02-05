package com.malikov.shopsystem.to;

public class OrderItemAutocompleteTo {

//    get rid of label. use javascript concatenation instead
    private String label;

    private String orderItemName;

    private Integer orderItemPrice;

    public OrderItemAutocompleteTo(String label, String orderItemName, Integer orderItemPrice) {
        this.label = label;
        this.orderItemName = orderItemName;
        this.orderItemPrice = orderItemPrice;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getOrderItemName() {
        return orderItemName;
    }

    public void setOrderItemName(String orderItemName) {
        this.orderItemName = orderItemName;
    }

    public Integer getOrderItemPrice() {
        return orderItemPrice;
    }

    public void setOrderItemPrice(Integer orderItemPrice) {
        this.orderItemPrice = orderItemPrice;
    }
}
