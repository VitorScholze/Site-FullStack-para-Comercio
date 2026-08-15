package com.example.siteComercio.service.impl;



import java.util.List;

import org.springframework.stereotype.Service;

import com.example.siteComercio.dto.CategoryDto;
import com.example.siteComercio.entity.Category;
import com.example.siteComercio.execption.CategoryNotFound;
import com.example.siteComercio.repository.CategoryRepository;
import com.example.siteComercio.service.CategoryService;

import lombok.AllArgsConstructor;

import com.example.siteComercio.mapper.CategoryMapper;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final  CategoryRepository categoryRepository;
    
    
    public CategoryDto createCategory(CategoryDto categoryDto){
        
       Category category = CategoryMapper.mapperToCategory(categoryDto);
       Category savedCategory = categoryRepository.save(category);

       return CategoryMapper.mapperToDto(savedCategory);
    }


    public List<CategoryDto> getAllCategories(){
        List<Category> categories = categoryRepository.findAll();
        return categories.stream().map(c -> CategoryMapper.mapperToDto(c)).toList(); 
    }


    public CategoryDto getCategoryById(Long id){
        Category category = categoryRepository.findById((id))
                .orElseThrow(() -> new CategoryNotFound("Category not found with id:" + id));
        
        return CategoryMapper.mapperToDto(category);
    }

    public CategoryDto updateCategory(Long id, CategoryDto categoryDto){
        Category category = categoryRepository.findById(id)
                    .orElseThrow(() ->  new CategoryNotFound("Category not found with id:" + id));

             category.setName(categoryDto.getName());
             category.setDescription(categoryDto.getDescription());
             
        Category categorySave = categoryRepository.save(category);

        return CategoryMapper.mapperToDto(categorySave);
    }


    public void deleteCategory(Long id){
        Category category = categoryRepository.findById(id)
                    .orElseThrow(() -> new CategoryNotFound("Category not found with id:" + id));

        categoryRepository.delete(category);
        
    }
}
