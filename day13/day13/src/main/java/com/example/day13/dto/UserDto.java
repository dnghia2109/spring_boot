package com.example.day13.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class UserDto {
    private String username;
    private String email;
    private String avatar;
}
