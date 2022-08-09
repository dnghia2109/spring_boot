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
    private ModelMapper modelMapper;

    private final List<User> userList ;


    public UserService() {
        userList = new ArrayList<>();
        userList.add(new User(1, "Nguyen Van A", "A@gmail.com", "1234", "NguyenVanA.jpg"));
        userList.add(new User(2, "Nguyen Van B", "B@gmail.com", "1235", "NguyenVanB.jpg"));
        userList.add(new User(3, "Nguyen Van C", "C@gmail.com", "1236", "NguyenVanC.jpg"));
        userList.add(new User(4, "Nguyen Van D", "D@gmail.com", "1237", "NguyenVanD.jpg"));
        userList.add(new User(5, "Nguyen Van E", "E@gmail.com", "1238", "NguyenVanE.jpg"));
    }
    public UserDto loginSuccess(UserRequest request) {
        UserDto userDto;
        User checkUser = checkUserName(request.getUsername()).orElseThrow(() -> {
            throw new NotFoundException("Không có User có Username là: " + request.getUsername());
        });
        if (checkUser.getPassword().equals(request.getPassword())) {
            userDto = modelMapper.map(checkUser, UserDto.class);
        } else {
            throw new BadRequestException("username hoặc password chưa chính xác");
        }
        return userDto;
    }

    public Optional<User> checkUserName(String username) {
        return userList.stream().filter(user -> user.getUsername().equals(username)).findFirst();
    }
}
