package com.example.siteComercio.execption;

public class CategoryNotFound extends RuntimeException  {
    
    public CategoryNotFound(String message){
        super(message);
    }
}
