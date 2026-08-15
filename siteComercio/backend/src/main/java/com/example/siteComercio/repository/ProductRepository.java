package com.example.siteComercio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siteComercio.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
    
}
