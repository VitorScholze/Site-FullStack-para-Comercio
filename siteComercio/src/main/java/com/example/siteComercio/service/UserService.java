package com.example.siteComercio.service;

import java.util.List;

import com.example.siteComercio.dto.UserDto;

public interface UserService {
    
    public UserDto createUser(UserDto userDto);
    
    public List<UserDto> getAllUsers();

    public UserDto getUserById(Long id);

    public UserDto updateUser(Long id, UserDto userDto);

    public void deleteUser(Long id);
}
