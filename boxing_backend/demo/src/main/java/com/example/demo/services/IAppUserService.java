package com.example.demo.services;

import com.example.demo.domain.AppUser;


import java.util.List;

public interface IAppUserService {

    String save(AppUser user);
    List<AppUser> getAllUsers();
    AppUser getUserByEmail(String email);

    void deleteUserWithEmail(String email);

    void deleteUser(Long id);
    boolean checkIfUserExists(String email);

}
