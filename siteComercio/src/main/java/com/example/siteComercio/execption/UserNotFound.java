package com.example.siteComercio.execption;

public class UserNotFound extends RuntimeException{
    

    public  UserNotFound(String message){
        super(message);
    }
}
