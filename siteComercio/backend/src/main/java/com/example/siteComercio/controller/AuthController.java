package com.example.siteComercio.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.siteComercio.dto.LoginDto;
import com.example.siteComercio.service.AuthService;

@RestController
@RequestMapping("api/auth/login")
public class AuthController {
    
    AuthService authService;
    @PostMapping
    public void AuthLogin(@RequestBody LoginDto logindDto){

        authService.login(logindDto);


    }
}
