package com.example.day13.mapper;

import com.example.day13.dto.UserDto;
import com.example.day13.model.User;

public class UserMapper {
    public static UserDto toUserDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setUsername(user.getUsername());
        userDto.setEmail(user.getEmail());
        userDto.setAvatar(user.getAvatar());

        return userDto;
    }
}
