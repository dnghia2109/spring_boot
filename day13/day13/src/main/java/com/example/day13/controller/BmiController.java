package com.example.day13.controller;

import com.example.day13.service.BmiService;
import com.example.day13.request.BmiRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class BmiController {
    @Autowired
    private BmiService service;

    @GetMapping("/bmi-get")
    public Double calculateBmiGet(@RequestParam double height, @RequestParam double weight) {
        return service.calculateBmi(height, weight);
    }

    @PostMapping("/bmi-post")
    public Double calculateBmiPost(@RequestBody BmiRequest request) {
        return service.calculateBmi(request.getHeight(), request.getWeight());
    }
}
