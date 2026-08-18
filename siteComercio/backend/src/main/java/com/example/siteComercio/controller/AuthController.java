package com.example.siteComercio.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.siteComercio.dto.LoginDto;
import com.example.siteComercio.service.AuthService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/auth")
@AllArgsConstructor
public class AuthController {
    
    private final AuthService authService;
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDto logindDto){

        String token = authService.login(logindDto);
        
        return ResponseEntity.ok(token);


    }
}
