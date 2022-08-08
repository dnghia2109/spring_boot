package com.example.day13.service;

import com.example.day13.exception.BadRequestException;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class ColorService {
    // color type
    public String randomColor(int type) {

        return switch (type) {
            case 1 -> randomColorName();
            case 2 -> randomHexColor();
            case 3 -> randomRgbColor();
            default -> throw new BadRequestException("Type không hợp lệ.");
        };
    }

    public String randomColorName () {
        String[] colors = {"red" , "black", "blue", "green"};
        Random random = new Random();
        int randomIndex = random.nextInt(colors.length);

        return colors[randomIndex];
    }

    public String randomHexColor () {
        String[] nums = {"0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"};

        StringBuilder hex = new StringBuilder("#");
        Random random = new Random();
        for (int i = 0; i < 6; i++) {
            int randomIndex = random.nextInt(nums.length);
            hex.append(nums[randomIndex]);
        }

        return hex.toString();
    }

    public String randomRgbColor () {
        // String[] nums = {"0","1","2","3","4","5","6","7","8","9"};
        StringBuilder rgb = new StringBuilder();
        String rs = "rgb(" + String.join(",", rgb.toString()) +")";
        Random random = new Random();
        for (int i = 0; i < 2; i++) {
            int randomIndex = random.nextInt(255);
             rgb.append(String.valueOf(randomIndex));
        }
        return rs;
    }
}
