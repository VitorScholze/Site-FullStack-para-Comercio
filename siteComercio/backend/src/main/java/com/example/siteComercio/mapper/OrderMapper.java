package com.example.siteComercio.mapper;

import java.util.List;

import com.example.siteComercio.dto.OrderDto;
import com.example.siteComercio.dto.OrderItemDto;
import com.example.siteComercio.entity.Order;
import com.example.siteComercio.entity.OrderItem;
import com.example.siteComercio.entity.User;

public class OrderMapper {

    public static OrderDto mapperToDto(Order order) {

        OrderDto dto = new OrderDto();

        dto.setId(order.getId());
        dto.setOrderDate(order.getOrderDate());
        dto.setTotal(order.getTotal());
        dto.setStatus(order.getStatus());
        dto.setUserId(order.getUser().getId());

        if (order.getItems() != null) {

            List<OrderItemDto> items = order.getItems()
                    .stream()
                    .map(OrderItemMapper::mapperToDto)
                    .toList();

            dto.setItems(items);
        }

        return dto;
    }

    public static Order mapperToOrder(
            OrderDto dto,
            User user,
            List<OrderItem> items) {

        Order order = new Order();

        order.setId(dto.getId());
        order.setOrderDate(dto.getOrderDate());
        order.setTotal(dto.getTotal());
        order.setStatus(dto.getStatus());
        order.setUser(user);
        order.setItems(items);

        return order;
    }
}