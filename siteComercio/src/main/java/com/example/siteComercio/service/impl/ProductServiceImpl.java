package com.example.siteComercio.service.impl;

import java.util.List;


import org.springframework.stereotype.Service;

import com.example.siteComercio.dto.ProductDto;
import com.example.siteComercio.entity.Category;
import com.example.siteComercio.entity.Product;
import com.example.siteComercio.execption.CategoryNotFound;
import com.example.siteComercio.execption.ProductNotFound;
import com.example.siteComercio.mapper.CategoryMapper;
import com.example.siteComercio.mapper.ProductMapper;
import com.example.siteComercio.repository.CategoryRepository;
import com.example.siteComercio.repository.ProductRepository;
import com.example.siteComercio.service.ProductService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ProductServiceImpl  implements ProductService{
    
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductDto createProduct(ProductDto productDto){

                Category category = categoryRepository.findById(
                    productDto.getCategory().getId()
            ).orElseThrow(() ->
                    new CategoryNotFound(
                            "Category not found with id: "
                            + productDto.getCategory().getId()
                    )
            );
        Product product = ProductMapper.mapperToProduct(productDto);
        product.setCategory(category);
        Product savedProduct = productRepository.save(product);

        return ProductMapper.mapperToDto(savedProduct);
    }


    public List<ProductDto> getAllProducts(){
        List<Product> products = productRepository.findAll();

        return products.stream().map(p -> ProductMapper.mapperToDto(p)).toList();
    } 



    public ProductDto getProductById(Long id){
        Product product = productRepository.findById(id)
                    .orElseThrow(() -> new ProductNotFound("Product not found with id:" + id));

        return ProductMapper.mapperToDto(product);
    }

    public ProductDto updateProduct(Long id,ProductDto productDto){

        Product product = productRepository.findById(id)
                    .orElseThrow(() ->
                            new ProductNotFound("Product not found with id: " + id));

            Category category = categoryRepository.findById(
                    productDto.getCategory().getId()
            ).orElseThrow(() ->
                    new CategoryNotFound(
                            "Category not found with id: "
                            + productDto.getCategory().getId()
                    ));

        
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setPrice(productDto.getPrice());
        product.setStock(productDto.getStock());
        product.setImageUrl(productDto.getImageUrl());
        product.setActive(productDto.getActive());
        product.setCategory(CategoryMapper.mapperToCategory(productDto.getCategory()));

        Product savedProduct = productRepository.save(product);

        return ProductMapper.mapperToDto(savedProduct);
        
    }


    public void deleteProduct(Long id){
        Product product = productRepository.findById(id)
                    .orElseThrow(() -> new ProductNotFound("Product not found with id:" + id));

        productRepository.delete(product);
    }
}
