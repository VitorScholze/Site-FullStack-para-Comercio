package com.example.siteComercio.execption;

public class OutOfStock extends RuntimeException {
    
    public OutOfStock(String message){
        super(message);
    }
}
