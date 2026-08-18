package com.example.siteComercio.service;

import com.example.siteComercio.dto.LoginDto;
import com.example.siteComercio.dto.UserDto;

public interface AuthService {
    
    public String login(LoginDto loginDto);
}
