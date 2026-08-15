package com.example.siteComercio.mapper;



import com.example.siteComercio.dto.CategoryDto;
import com.example.siteComercio.entity.Category;


public class CategoryMapper {
    

    public static CategoryDto mapperToDto(Category category){
            CategoryDto categoryDto = new CategoryDto();
            categoryDto.setId(category.getId());
            categoryDto.setName(category.getName());
            categoryDto.setDescription(category.getDescription());


            return categoryDto;
    }


    public static Category mapperToCategory(CategoryDto categoryDto){
        Category category = new Category();

        category.setId(categoryDto.getId());
        category.setName(categoryDto.getName());
        category.setDescription(categoryDto.getDescription());
    

        return category;

}
}
