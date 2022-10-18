package com.project.leukbook.service;

import com.project.leukbook.mapper.UserModelMapper;
import com.project.leukbook.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    public UserModelMapper userModelMapper;

    public UserModel register(UserModel userModel) {
        // register user
        this.userModelMapper.insert(userModel);
        // fetch user info by id
        UserModel registeredUser = userModelMapper.selectByPrimaryKey(userModel.getId());
        // clean up the user credential
        registeredUser.setPassword(null);
        return registeredUser;
    }

    public UserModel login(UserModel userModel) {
        // fetch user info by id
        UserModel loginUser = userModelMapper.selectByEmailAndPassword(userModel);
        if (loginUser != null) {
            // clean up the user credential
            loginUser.setPassword(null);
        }
        return loginUser;
    }
}
