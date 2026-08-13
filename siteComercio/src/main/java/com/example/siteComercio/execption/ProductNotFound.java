package com.example.siteComercio.execption;

public class ProductNotFound extends RuntimeException {
    
    public ProductNotFound(String message){
        super(message);
    }
}
