package com.example.siteComercio.service;

import java.util.List;

import com.example.siteComercio.dto.ProductDto;



public interface ProductService {


    public ProductDto createProduct(ProductDto productDto);

    public List<ProductDto> getAllProducts();

    public ProductDto getProductById(Long id);

    public ProductDto updateProduct(Long id, ProductDto productDto);

    public void deleteProduct(Long id);
    
}
