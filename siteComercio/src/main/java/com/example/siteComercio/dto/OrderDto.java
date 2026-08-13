package com.example.siteComercio.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import com.example.siteComercio.entity.OrderStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrderDto {

    private Long id;

    private LocalDateTime orderDate;

    private BigDecimal total;

    private OrderStatus status;

    private Long userId;

    private List<OrderItemDto> items;
}