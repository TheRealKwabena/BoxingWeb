package com.example.demo.config;

import com.example.demo.domain.AppUser;
import com.example.demo.repositories.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfiguration {
    @Autowired
    private final AppUserRepository userRepository;

    public UserConfiguration(AppUserRepository  userRepository) {
        this.userRepository = userRepository;
    }
    @Bean
    CommandLineRunner commandLineRunner(AppUserRepository  userRepository) {
        return args -> {
            AppUser user1= new AppUser( "James", "aditya.james@gu.se", "aditya123.") ;
            userRepository.save(user1);
        };
    }
}
