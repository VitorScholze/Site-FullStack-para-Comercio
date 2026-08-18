package com.example.siteComercio.execption;

public class InvalidCredentialsException extends RuntimeException{
    
    public InvalidCredentialsException(String message){
        super(message);
    }
}
