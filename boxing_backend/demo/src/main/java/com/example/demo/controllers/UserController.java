package com.example.demo.controllers;

import com.example.demo.domain.AppUser;

import com.example.demo.services.AppUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/api/v1")
@CrossOrigin
public class UserController {
    private static final String SUCCESSFUL_CREATION_MESSAGE = "Customer saved successfully";
    private static final String EMAIL_ALREADY_TAKEN = "Email already taken";
    private static final String CUSTOMER_NOT_FOUND = "Customer not found";

    @Autowired
    private  final AppUserService userService;

    public UserController(AppUserService userService) {
        this.userService = userService;
    }
    @PostMapping(path = "/users")
    ResponseEntity<?> createUser(@RequestBody AppUser user ) {
        String message = this.userService.save(user);

        if(message.equals(EMAIL_ALREADY_TAKEN)) {
            return ResponseEntity.ok(EMAIL_ALREADY_TAKEN);
        }
        if(message.equals(SUCCESSFUL_CREATION_MESSAGE)) {
            return ResponseEntity.status(HttpStatus.CREATED).body(user);
        }
        return ResponseEntity.badRequest().build();

    }
    @GetMapping("/users/{id}")

    ResponseEntity<?> getUser(@PathVariable Long id) {
        AppUser user = this.userService.getAppUser(id);

        if(user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(CUSTOMER_NOT_FOUND);
        }
        return ResponseEntity.ok(user);
    }
    @GetMapping("/authenticate/{email}")
    ResponseEntity<?> authenticateUser(@PathVariable String email) {
        boolean userExists = this.userService.checkIfUserExists(email);
        return ResponseEntity.ok(userExists);

    }
    @GetMapping(path = "/users")
    ResponseEntity<?> getAllUsers() {
        List<AppUser> users = this.userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
}
