package com.example.siteComercio.mapper;

import com.example.siteComercio.entity.OrderItem;
import com.example.siteComercio.entity.Product;
import com.example.siteComercio.dto.OrderDto;
import com.example.siteComercio.dto.OrderItemDto;

public class OrderItemMapper {

     public static OrderItemDto mapperToDto(OrderItem orderItem) {

        OrderItemDto dto = new OrderItemDto();

        dto.setId(orderItem.getId());
        dto.setProductId(orderItem.getProduct().getId());
        dto.setQuantity(orderItem.getQuantity());
        dto.setUnitPrice(orderItem.getUnitPrice());
        dto.setSubtotal(orderItem.getSubTotal());
        
        return dto;
    }

    public static OrderItem mapperToOrderItem(OrderItemDto dto, Product product) {

    OrderItem orderItem = new OrderItem();

    orderItem.setId(dto.getId());
    orderItem.setProduct(product);
    orderItem.setQuantity(dto.getQuantity());
    orderItem.setUnitPrice(dto.getUnitPrice());
    orderItem.setSubTotal(dto.getSubtotal());

    return orderItem;
}
    
}
