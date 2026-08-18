package com.example.siteComercio.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.siteComercio.dto.LoginDto;

import com.example.siteComercio.entity.User;
import com.example.siteComercio.execption.InvalidCredentialsException;
import com.example.siteComercio.repository.UserRepository;
import com.example.siteComercio.service.AuthService;


import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {
    
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    
     
    

    @Override
    public void login(LoginDto loginDto){

        String email = loginDto.getEmail();
        User user = userRepository.findUserByEmail(email);

        if(user == null){
            throw new InvalidCredentialsException("Invalid Credentials!");
        }

        boolean loginValido = passwordEncoder.matches((loginDto.getPassword()), user.getPassword());

        if(loginValido == false){
            throw new InvalidCredentialsException("Invalid Credentials!");
        }


        
    }
}
