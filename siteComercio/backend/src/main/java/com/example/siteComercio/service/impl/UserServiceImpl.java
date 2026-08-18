package com.example.siteComercio.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.siteComercio.dto.UserDto;
import com.example.siteComercio.entity.User;
import com.example.siteComercio.execption.GlobalExceptionHandler;
import com.example.siteComercio.execption.UserNotFound;
import com.example.siteComercio.mapper.UserMapper;
import com.example.siteComercio.repository.UserRepository;
import com.example.siteComercio.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
   
    
    
    public UserDto createUser(UserDto userDto){
        User user = UserMapper.mapperToUser(userDto);
        user.setCreatedAt(LocalDateTime.now());

        user.setPassword(passwordEncoder.encode(userDto.getPassword()));

        User userSaved = userRepository.save(user);


        return UserMapper.mapperToDto(userSaved);
    }
    

    public List<UserDto> getAllUsers(){
        List<User> users = userRepository.findAll();

        return users.stream().map( u -> UserMapper.mapperToDto(u)).toList();
    }


    public UserDto getUserById(Long id){
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFound("User not found with id:" + id));


        return UserMapper.mapperToDto(user);
    }


    public UserDto updateUser(Long id, UserDto userDto){
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFound("User not found with id:" + id));

        
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setCreatedAt(userDto.getCreatedAt());
        user.setRole(userDto.getRole());
        String senha = passwordEncoder.encode(userDto.getPassword());
        user.setPassword(senha);


        userRepository.save(user);

        return UserMapper.mapperToDto(user);

    }


    public void deleteUser(Long id){
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFound("User not found with id: " + id));


        userRepository.delete(user);
    }


    public UserDto findUserByEmail(String email){

        User user = userRepository.findUserByEmail(email);

        if(user == null){
            throw new UserNotFound("User not found with email: " + email);
        }

        return UserMapper.mapperToDto(user);




    }
}
