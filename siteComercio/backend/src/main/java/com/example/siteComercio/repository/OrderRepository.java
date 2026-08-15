package com.example.siteComercio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siteComercio.entity.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    
}
