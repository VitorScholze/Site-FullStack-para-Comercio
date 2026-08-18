package com.example.siteComercio.service;

import com.example.siteComercio.entity.User;

public interface JwtService {

    public String generateToken(User user);
}
