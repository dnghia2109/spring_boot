package com.example.LoginUser.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class User {
    private int id;
    private String username;
    private String email;
    private String password;
    private String avatar;
}
