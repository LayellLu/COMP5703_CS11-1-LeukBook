package com.project.leukbook.service;

import com.project.leukbook.mapper.UserBodyModelMapper;
import com.project.leukbook.model.UserBodyModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class UserBodyService {
    @Autowired
    public UserBodyModelMapper userBodyModelMapper;

    public UserBodyModel addUserBody(UserBodyModel userBodyModel) {
        userBodyModelMapper.insert(userBodyModel);
        return userBodyModel;
    }

    public UserBodyModel getUserBodyByUserId(Long userId) {
        return userBodyModelMapper.selectByUserId(userId);
    }

    public Long addUserBodyAndReturnSize(UserBodyModel userBodyModel) {
        userBodyModelMapper.insert(userBodyModel);
        return this.calculateSize(userBodyModel);
    }

    public Long getSizeByUserId(Long userId) {
        return this.calculateSize(userBodyModelMapper.selectByUserId(userId));
    }

    private Long calculateSize(UserBodyModel userBodyModel) {
        // 这部分是求出BigDecimal类型的每个参数值的最大值
        // Get Max Size
        BigDecimal maxSize = userBodyModel.getUpperArm();
        if (maxSize.compareTo(userBodyModel.getUpperThigh()) < 0) {
            maxSize = userBodyModel.getUpperThigh();
        }
        if (maxSize.compareTo(userBodyModel.getShoulderWidth()) < 0) {
            maxSize = userBodyModel.getShoulderWidth();
        }
        if (maxSize.compareTo(userBodyModel.getUpperThigh()) < 0) {
            maxSize = userBodyModel.getUpperThigh();
        }
        if (maxSize.compareTo(userBodyModel.getBust()) < 0) {
            maxSize = userBodyModel.getBust();
        }
        if (maxSize.compareTo(userBodyModel.getWaist()) < 0) {
            maxSize = userBodyModel.getWaist();
        }
        if (maxSize.compareTo(userBodyModel.getHip()) < 0) {
            maxSize = userBodyModel.getHip();
        }
        // Calculate result
        return userBodyModel.getUpperArm()
                .add(userBodyModel.getUpperThigh())
                .add(userBodyModel.getShoulderWidth())
                .add(userBodyModel.getBust())
                .add(userBodyModel.getWaist())
                .add(userBodyModel.getHip())
                // 上面这些add是用来获得所有参数的值
                .divide(BigDecimal.valueOf(6))
                // 加上divide求出平均值
                .add(maxSize)
                // 再加上最大值
                .divide(BigDecimal.valueOf(2))
                // 除以二
                .setScale(0, RoundingMode.UP).longValue();
                // 最后这句话的意思是向上取整
    }
}
