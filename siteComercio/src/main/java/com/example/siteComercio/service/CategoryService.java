package com.example.siteComercio.service;

import java.util.List;

import com.example.siteComercio.dto.CategoryDto;

import com.example.siteComercio.mapper.CategoryMapper;

public interface CategoryService {
    
    

    public CategoryDto createCategory(CategoryDto categoryDto);

    public List<CategoryDto> getAllCategories();

    public CategoryDto getCategoryById(Long id);

    public CategoryDto updateCategory(Long id, CategoryDto categroyDto);

    public void deleteCategory(Long id);
}
