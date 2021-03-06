package com.malikov.shopsystem.controller;

import com.malikov.shopsystem.dto.OrderLineDto;
import com.malikov.shopsystem.dto.ProductAutocompleteDto;
import com.malikov.shopsystem.service.product.cache.CachedProductAutocompleteDtosService;
import com.malikov.shopsystem.service.order.OrderLineService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/order-line", produces = MediaType.APPLICATION_JSON_VALUE)
public class OrderLineController {

    private final OrderLineService orderLineService;
    private final CachedProductAutocompleteDtosService cachedProductAutocompleteDtosService;

    public OrderLineController(OrderLineService orderLineService,
                               CachedProductAutocompleteDtosService cachedProductAutocompleteDtosService) {
        this.orderLineService = orderLineService;
        this.cachedProductAutocompleteDtosService = cachedProductAutocompleteDtosService;
    }

    @GetMapping("/autocomplete-by-product-name-mask/{productNameMask}")
    public List<ProductAutocompleteDto> autocompleteOrderItemName(@PathVariable String productNameMask) {
        return cachedProductAutocompleteDtosService.getByProductNameMask(productNameMask);
    }

    @PostMapping("/create-empty-for-order/{orderId}")
    public OrderLineDto create(@PathVariable Long orderId) {
        return orderLineService.create(orderId);
    }

    @PutMapping(value = "/{orderLineId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void update(@PathVariable Long orderLineId, @RequestBody OrderLineDto orderLineDto) {
        orderLineDto.setOrderLineId(orderLineId);
        orderLineService.update(orderLineDto);
    }

    @DeleteMapping("/{orderLineId}")
    public void delete(@PathVariable Long orderLineId) {
        orderLineService.delete(orderLineId);
    }

}
