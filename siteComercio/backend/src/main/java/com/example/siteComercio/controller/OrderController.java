package com.example.siteComercio.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.siteComercio.dto.OrderDto;
import com.example.siteComercio.service.OrderService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/order")
public class OrderController {
    
    private final OrderService orderService;

    
    @PostMapping
    public ResponseEntity<OrderDto> createOrder(@RequestBody OrderDto orderDto){
        OrderDto order = orderService.createOrder(orderDto);

        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }


    @GetMapping
    public ResponseEntity<List<OrderDto>> getAllOrders(){
        List<OrderDto> orders = orderService.getAllOrders();

        return ResponseEntity.ok(orders);
    }


    @GetMapping("/{id}")
    public ResponseEntity<OrderDto> getOrderById(@PathVariable Long id){
        OrderDto order = orderService.getOrderById(id);

        return ResponseEntity.ok(order);
    }



    @PutMapping("{id}")
    public ResponseEntity<OrderDto> updateOrder(@PathVariable Long id, @RequestBody OrderDto orderDto){
        OrderDto order = orderService.updateOrder(id, orderDto);

        return ResponseEntity.ok(order);
    }



    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long id){
        orderService.deleteOrder(id);

        return ResponseEntity.ok("Order successfully deleted!");
    }




}
