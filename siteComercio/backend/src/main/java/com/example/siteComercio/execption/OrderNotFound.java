package com.example.siteComercio.execption;

public class OrderNotFound extends RuntimeException{
    
    public OrderNotFound(String message){
        super(message);
    }
}
