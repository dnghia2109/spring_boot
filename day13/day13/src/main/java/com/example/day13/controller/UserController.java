package com.example.day13.controller;

import com.example.day13.dto.UserDto;
import com.example.day13.request.UserRequest;
import com.example.day13.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/login")
//    public UserDto login(@RequestParam String username, @RequestParam String password) {
//        return userService.loginSuccess(username, password);
//    }

    @PostMapping("/login")
    public UserDto getUserInfo(@RequestBody UserRequest request){
        return userService.loginSuccess(request);
    }
}
