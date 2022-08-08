package com.example.day13.controller;

import com.example.day13.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ColorController {
    @Autowired
    private ColorService service;

    @GetMapping("/random-color")
    public String randomColor(@RequestParam int type) {
        return service.randomColor(type);
    }
}
