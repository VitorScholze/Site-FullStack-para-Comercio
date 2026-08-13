package com.example.siteComercio.dto;

import java.time.LocalDateTime;

import com.example.siteComercio.entity.UserRole;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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

    @NotBlank
    private String name;

    @NotBlank
    private String email;

    @NotBlank
    @JsonIgnore
    private String password;

    @NotNull
    private UserRole role;

    private LocalDateTime createdAt;
}
