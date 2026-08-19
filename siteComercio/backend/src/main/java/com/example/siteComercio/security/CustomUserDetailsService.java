package com.example.siteComercio.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.siteComercio.entity.User;
import com.example.siteComercio.repository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    
    private final UserRepository userRepository;
    
    @Override
    public UserDetails loadUserByUsername(String email){
        User user = userRepository.findUserByEmail(email);

        if(user == null){
            throw new UsernameNotFoundException("Username not found with email:v" + email);
        }
        return new CustomUserDetails(user);
    }
}
