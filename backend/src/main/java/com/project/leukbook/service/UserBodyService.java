package com.project.leukbook.service;

import com.project.leukbook.mapper.UserBodyModelMapper;
import com.project.leukbook.model.UserBodyModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserBodyService {
    @Autowired
    public UserBodyModelMapper userBodyModelMapper;

    public UserBodyModel addUserBody(UserBodyModel userBodyModel) {
        userBodyModelMapper.insert(userBodyModel);
        return userBodyModel;
    }
}
