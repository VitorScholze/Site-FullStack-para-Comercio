package com.example.siteComercio.mapper;

import com.example.siteComercio.dto.ProductDto;
import com.example.siteComercio.entity.Product;

public class ProductMapper {
    


    public static ProductDto mapperToDto(Product product){
        ProductDto productDto = new ProductDto();
        productDto.setId(product.getId());
        productDto.setName(product.getName());
        productDto.setDescription(product.getDescription());
        productDto.setPrice(product.getPrice());
        productDto.setStock(product.getStock());
        productDto.setImageUrl(product.getImageUrl());
        productDto.setActive(product.getActive());
        productDto.setCategory(CategoryMapper.mapperToDto(product.getCategory()));
        productDto.setFeatured(product.getFeatured());

        return productDto;
    }


    public static Product mapperToProduct(ProductDto productDto){

        Product product = new Product();

        product.setId(productDto.getId());
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setPrice(productDto.getPrice());
        product.setStock(productDto.getStock());
        product.setImageUrl(productDto.getImageUrl());
        product.setActive(productDto.getActive());
        product.setFeatured(productDto.getFeatured());
        product.setCategory(CategoryMapper.mapperToCategory(productDto.getCategory()));

        return product;
    }
}
