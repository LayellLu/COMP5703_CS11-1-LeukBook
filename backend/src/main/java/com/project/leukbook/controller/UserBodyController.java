package com.project.leukbook.controller;

import com.project.leukbook.model.UserBodyModel;
import com.project.leukbook.service.UserBodyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user-body")
public class UserBodyController {
    @Autowired
    private UserBodyService userBodyService;

    @PostMapping
    public UserBodyModel addUserBody(@RequestBody UserBodyModel userBodyModel) {
        return this.userBodyService.addUserBody(userBodyModel);
    }

    @GetMapping("/{userId}")
    public UserBodyModel getUserBodyByUserId(@PathVariable Long userId) {
        return this.userBodyService.getUserBodyByUserId(userId);
    }

    @PostMapping("/size")
    public Long addUserBodyAndReturnSize(@RequestBody UserBodyModel userBodyModel) {
        return this.userBodyService.addUserBodyAndReturnSize(userBodyModel);
    }

    @GetMapping("/size/{userId}")
    public Long getSizeByUserId(@PathVariable Long userId) {
        return this.userBodyService.getSizeByUserId(userId);
    }
}
