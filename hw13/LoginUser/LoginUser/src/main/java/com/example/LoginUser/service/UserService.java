package com.example.LoginUser.service;

import com.example.LoginUser.dto.UserDto;
import com.example.LoginUser.exception.BadRequestException;
import com.example.LoginUser.exception.NotFoundException;
import com.example.LoginUser.model.User;
import com.example.LoginUser.request.UserRequest;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    ModelMapper modelMapper;

    private final List<User> userList ;


    public UserService() {
        userList = new ArrayList<>();
        userList.add(new User(1, "A", "A@gmail.com", "1234", "NguyenVanA.jpg"));
        userList.add(new User(2, "B", "B@gmail.com", "1235", "NguyenVanB.jpg"));
        userList.add(new User(3, "C", "C@gmail.com", "1236", "NguyenVanC.jpg"));
        userList.add(new User(4, "D", "D@gmail.com", "1237", "NguyenVanD.jpg"));
        userList.add(new User(5, "E", "E@gmail.com", "1238", "NguyenVanE.jpg"));
    }
    public UserDto loginSuccess(UserRequest request) {
        User userChecked = checkLogin(request).orElseThrow(() -> {
            throw new NotFoundException("Không có User có Username là: " + request.getUsername());
        });
        return modelMapper.map(userChecked, UserDto.class);
    }

    public Optional<User> checkLogin(UserRequest request) {
        return userList.stream().filter(user -> user.getUsername().equals(request.getUsername()) && user.getPassword().equals(request.getPassword())).findFirst();
    }
}
