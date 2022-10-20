package com.project.leukbook.model;

import java.math.BigDecimal;

public class UserBodyModel {

    private Integer id;

    private Long userId;

    private BigDecimal upperArm;

    private BigDecimal upperThigh;

    private BigDecimal shoulderWidth;

    private BigDecimal bust;

    private BigDecimal waist;

    private BigDecimal hip;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public BigDecimal getUpperArm() {
        return upperArm;
    }

    public void setUpperArm(BigDecimal upperArm) {
        this.upperArm = upperArm;
    }

    public BigDecimal getUpperThigh() {
        return upperThigh;
    }

    public void setUpperThigh(BigDecimal upperThigh) {
        this.upperThigh = upperThigh;
    }

    public BigDecimal getShoulderWidth() {
        return shoulderWidth;
    }

    public void setShoulderWidth(BigDecimal shoulderWidth) {
        this.shoulderWidth = shoulderWidth;
    }

    public BigDecimal getBust() {
        return bust;
    }

    public void setBust(BigDecimal bust) {
        this.bust = bust;
    }

    public BigDecimal getWaist() {
        return waist;
    }

    public void setWaist(BigDecimal waist) {
        this.waist = waist;
    }

    public BigDecimal getHip() {
        return hip;
    }

    public void setHip(BigDecimal hip) {
        this.hip = hip;
    }

}