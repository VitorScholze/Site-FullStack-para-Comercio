package com.example.siteComercio.service;

import java.util.List;

import com.example.siteComercio.dto.OrderDto;

public interface OrderService {
    

    public OrderDto createOrder(OrderDto orderDto);

    public List<OrderDto> getAllOrders();

    public OrderDto getOrderById(Long id);

    public OrderDto updateOrder(Long id, OrderDto orderDto);

    public void deleteOrder(Long id);


}
