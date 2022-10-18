package com.project.leukbook.controller;

import com.project.leukbook.model.UserModel;
import com.project.leukbook.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public UserModel register(@RequestBody UserModel userModel) {
        return this.userService.register(userModel);
    }

    @PostMapping("/login")
    public UserModel login(@RequestBody UserModel userModel) {
        return this.userService.login(userModel);
    }
}
