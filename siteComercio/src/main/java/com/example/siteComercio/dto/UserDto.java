package com.example.siteComercio.dto;

import java.time.LocalDateTime;

import javax.management.relation.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDto {

    private Long id;

    private String name;

    private String email;

    private Role role;

    private LocalDateTime createdAt;
}
