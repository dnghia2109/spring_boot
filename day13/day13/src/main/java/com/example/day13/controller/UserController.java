package com.example.day13.controller;

import com.example.day13.dto.UserDto;
import com.example.day13.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public UserDto login(@RequestParam String username, @RequestParam String password) {


        return userService.checkLogin(username, password);
    }
}
