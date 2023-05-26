package com.example.demo.domain;

import jakarta.persistence.*;

@Entity(name = "AppUser")
@Table(name = "users",
        uniqueConstraints = {
        @UniqueConstraint(
                name="customer_email_unique",
                columnNames = "email"

        )
        }
)
public class AppUser {
    @Id
    @SequenceGenerator(
            name = "user-sequence",
            sequenceName = "user-sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user-sequence"
    )
    @Column(
            nullable = false,
            insertable = false
    )
    private Long id;
    @Column(
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String name;

    @Column(
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String email;
    @Column(
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String password;

    public AppUser(Long id, String name,  String email, String password) {
        this.id = id;
       this.name = name;
        this.email = email;
        this.password = password;
    }
    public AppUser(String name, String email, String password) {
       this.name = name;
        this.email = email;
        this.password = password;
    }

    public AppUser() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
