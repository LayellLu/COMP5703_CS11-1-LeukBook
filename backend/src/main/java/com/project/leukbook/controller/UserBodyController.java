package com.project.leukbook.controller;

import com.project.leukbook.model.UserBodyModel;
import com.project.leukbook.service.UserBodyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user-body")
public class UserBodyController {
    @Autowired
    private UserBodyService userBodyService;

    @PostMapping
    public UserBodyModel addUserBody(@RequestBody UserBodyModel userBodyModel) {
        return this.userBodyService.addUserBody(userBodyModel);
    }
}
