package com.project.leukbook.mapper;

import com.project.leukbook.model.UserModel;

import java.util.List;

public interface UserModelMapper {

    int deleteByPrimaryKey(Integer id);

    int insert(UserModel record);

    UserModel selectByPrimaryKey(Integer id);


    List<UserModel> selectAll();

    int updateByPrimaryKey(UserModel record);

    UserModel selectByEmailAndPassword(UserModel record);
}
