package com.example.siteComercio.mapper;

import com.example.siteComercio.dto.UserDto;
import com.example.siteComercio.entity.User;

public class UserMapper {
    

    public static UserDto mapperToDto(User user){
        UserDto userDto = new UserDto();

        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());
        userDto.setCreatedAt(user.getCreatedAt());
        userDto.setRole(user.getRole());
        userDto.setPassword(user.getPassword());

        return userDto;
    }


    public static User mapperToUser(UserDto userDto){
        User user = new User();

        user.setId(userDto.getId());
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setCreatedAt(userDto.getCreatedAt());
        user.setRole(userDto.getRole());
        user.setPassword(userDto.getPassword());

        return user;
    }
}
