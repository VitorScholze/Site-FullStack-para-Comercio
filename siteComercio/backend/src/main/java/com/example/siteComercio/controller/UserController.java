package com.example.siteComercio.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.siteComercio.dto.UserDto;

import com.example.siteComercio.service.UserService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;


@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {
    

    private final UserService userService;

    @PostMapping
    public ResponseEntity<UserDto> createUser( @Valid @RequestBody UserDto userDto){
        UserDto user = userService.createUser(userDto);

        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }


    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers(){
        List<UserDto> users = userService.getAllUsers();


        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable Long id){
        UserDto user = userService.getUserById(id);

        return ResponseEntity.ok(user);
    }



    @PutMapping("/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable Long id, @Valid @RequestBody UserDto userDto){
        UserDto user = userService.updateUser(id, userDto);

        return ResponseEntity.ok(user);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id){

        userService.deleteUser(id);

        return ResponseEntity.ok("User Successfully deleted!");
    }

        
}
