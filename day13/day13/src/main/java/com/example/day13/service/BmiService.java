package com.example.day13.service;

import com.example.day13.exception.BadRequestException;
import com.example.day13.request.BmiRequest;
import org.springframework.stereotype.Service;

@Service
public class BmiService {
    public Double calculateBmi(double height, double weight) {
        if (height <= 0 || weight <= 0 ) {
            throw new BadRequestException("Height/Weight phải lớn hơn 0");
        }
        return weight /( height * height);
    }
}
