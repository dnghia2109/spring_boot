package com.example.day13.service;

import com.example.day13.dto.UserDto;
import com.example.day13.exception.NotFoundException;
import com.example.day13.exception.UnauthorizeException;
import com.example.day13.model.User;
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
        userList.add(new User(2, "Nguyen Van B", "B@gmail.com", "1234", "NguyenVanB.jpg"));
        userList.add(new User(3, "Nguyen Van C", "C@gmail.com", "1234", "NguyenVanC.jpg"));
        userList.add(new User(4, "Nguyen Van D", "D@gmail.com", "1234", "NguyenVanD.jpg"));
        userList.add(new User(5, "Nguyen Van E", "E@gmail.com", "1234", "NguyenVanE.jpg"));
    }
    public UserDto checkLogin(String username, String password) {
        UserDto userDto;
        User checkUser = findByUserName(username).orElseThrow(() -> {
            throw new NotFoundException("Không có User có Username là: " + username);
        });
        if (checkUser.getPassword().equals(password)) {
            userDto = modelMapper.map(checkUser, UserDto.class);
        } else {
            throw new UnauthorizeException("Sai mật khẩu!");
        }
        return userDto;
    }

    public Optional<User> findByUserName(String username) {
        return userList.stream().filter(user -> user.getUsername().equals(username)).findFirst();
    }
}
