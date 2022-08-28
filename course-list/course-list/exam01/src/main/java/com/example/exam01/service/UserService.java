package com.example.exam01.service;

import com.example.exam01.model.Supporter;
import com.example.exam01.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Supporter getSupporter(int id){
        return userRepository.getSupporter(id);
    }
}
