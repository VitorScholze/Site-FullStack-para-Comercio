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
@Setter
@Getter
public class OrderItemDto {

    private Long id;

    private Long productId;

    private Integer quantity;

    private BigDecimal unitPrice;

    private BigDecimal subtotal;
}

