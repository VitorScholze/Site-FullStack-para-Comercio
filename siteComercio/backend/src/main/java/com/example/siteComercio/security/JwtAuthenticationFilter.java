package com.example.siteComercio.security;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.siteComercio.repository.UserRepository;
import com.example.siteComercio.service.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
private final UserRepository userRepository;
    
@Override
protected void doFilterInternal(
        HttpServletRequest request,
        HttpServletResponse response,
        FilterChain filterChain
) throws ServletException, IOException {


String authHeader = request.getHeader( "Authorization");


if(authHeader != null && authHeader.startsWith("Bearer ")){
    String token = authHeader.substring(7);
}

    }
}
