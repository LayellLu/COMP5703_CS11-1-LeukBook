package com.project.leukbook.mapper;

import com.project.leukbook.model.UserBodyModel;

import java.util.List;

public interface UserBodyModelMapper {

    int deleteByPrimaryKey(Integer id);

    int insert(UserBodyModel record);

    UserBodyModel selectByPrimaryKey(Integer id);

    List<UserBodyModel> selectAll();

    int updateByPrimaryKey(UserBodyModel record);

    UserBodyModel selectByUserId(Integer userId);
}
