package com.example.demo.services;


import com.example.demo.domain.AppUser;
import com.example.demo.repositories.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppUserService implements IAppUserService {
    private static final String SUCCESSFUL_CREATION_MESSAGE = "AppUser saved successfully";
    private static final String EMAIL_ALREADY_TAKEN = "Email already taken";
    @Autowired
    private final AppUserRepository appUserRepository;

    public AppUserService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public String save(AppUser AppUser) {
        try {
            this.appUserRepository.save(AppUser);
            return SUCCESSFUL_CREATION_MESSAGE;
        } catch(DataIntegrityViolationException ex) {
            return EMAIL_ALREADY_TAKEN;
        }

    }

    @Override
    public boolean checkIfUserExists(String email) {
        boolean exists = this.appUserRepository.existsByEmail(email);
       return exists;
    }

    @Override
    public List<AppUser> getAllUsers() {
        return this.appUserRepository.findAll();
    }

    @Override
    public AppUser getUserByEmail(String email) {
        return this.appUserRepository.getUserByEmail(email);
    }

    @Override
    public void deleteUserWithEmail(String email) {
        this.appUserRepository.deleteUserByEmail(email);
    }

    @Override
    public void deleteUser(Long id) {
        this.appUserRepository.deleteById(id);

    }

    public AppUser getAppUser(Long id) {
        AppUser appUser = null;
        Optional<AppUser> appUserOptional = this.appUserRepository.findById(id);
        if(appUserOptional.isPresent()) {
            appUser = appUserOptional.get();
        }
        return appUser;


    }


}
