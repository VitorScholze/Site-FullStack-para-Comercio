package com.example.siteComercio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siteComercio.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
}
