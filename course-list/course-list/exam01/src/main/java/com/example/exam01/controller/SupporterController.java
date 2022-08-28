package com.example.exam01.controller;

import com.example.exam01.model.Supporter;
import com.example.exam01.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SupporterController {
    @Autowired
    private UserService userService;

    @GetMapping("/supporter")
    public Supporter getSupporter(@RequestParam int id){
        return userService.getSupporter(id);
    }
}
