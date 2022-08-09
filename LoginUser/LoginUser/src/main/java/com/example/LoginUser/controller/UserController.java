package com.example.LoginUser.controller;


import com.example.LoginUser.dto.UserDto;
import com.example.LoginUser.request.UserRequest;
import com.example.LoginUser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public UserDto getUserInfo(@RequestBody UserRequest request){
        return userService.loginSuccess(request);
    }
}
