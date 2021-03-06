package com.malikov.shopsystem.controller;

import com.malikov.shopsystem.dto.CustomerAutocompleteDto;
import com.malikov.shopsystem.dto.CustomerDto;
import com.malikov.shopsystem.dto.Page;
import com.malikov.shopsystem.service.CustomerService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/customer", produces = MediaType.APPLICATION_JSON_VALUE)
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("/{customerId}")
    public CustomerDto get(@PathVariable Long customerId) {
        return customerService.get(customerId);
    }

    @GetMapping
    public Page<CustomerDto> getCustomerTablePage(@RequestParam int pageNumber, @RequestParam int pageCapacity) {
        return customerService.getPage(pageNumber, pageCapacity);
    }

    @PostMapping
    public void create(CustomerDto customerDto) {
        customerService.create(customerDto);
    }

    @PostMapping("/from-order-data/{orderId}")
    public CustomerDto createCustomerFromOrderData(@PathVariable Long orderId) {
        return customerService.createCustomerFromOrderData(orderId);
    }

    @PutMapping(value = "/{customerId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public CustomerDto update(@PathVariable Long customerId, @RequestBody CustomerDto customerDto) {
        customerDto.setCustomerId(customerId);
        return customerService.update(customerDto);
    }

    @DeleteMapping("/{customerId}")
    public void delete(@PathVariable Long customerId) {
        customerService.delete(customerId);
    }

    @GetMapping("/autocomplete-by-last-name-mask/{lastNameMask}")
    public List<CustomerAutocompleteDto> autocompleteByLastName(@PathVariable String lastNameMask) {
        return customerService.getByLastNameMask(lastNameMask);
    }

    @GetMapping("/autocomplete-by-phone-number-mask/{phoneNumberMask}")
    public List<CustomerAutocompleteDto> autocompleteByPhoneNumber(@PathVariable String phoneNumberMask) {
        return customerService.getByPhoneNumberMask(phoneNumberMask);
    }

    @GetMapping("/autocomplete-by-city-mask/{cityMask}")
    public List<CustomerAutocompleteDto> autocompleteByCityName(@PathVariable String cityMask) {
        return customerService.getByCityNameMask(cityMask);
    }

}
