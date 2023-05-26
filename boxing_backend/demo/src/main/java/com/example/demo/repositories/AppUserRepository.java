package com.example.demo.repositories;

import com.example.demo.domain.AppUser;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {
  AppUser getUserByEmail(String email);

    void deleteUserByEmail(String email);
    boolean existsByEmail(String email);

}
