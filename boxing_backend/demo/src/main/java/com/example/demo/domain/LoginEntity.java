package com.example.demo.domain;

public class LoginEntity {

    private String email;

    private String password;

    public LoginEntity(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
