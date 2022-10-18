package com.project.leukbook.model;

import java.math.BigDecimal;

public class UserBodyModel {

    private Integer id;

    private Long userId;

    private BigDecimal weight;

    private BigDecimal height;

    private BigDecimal shoulderWidth;

    private BigDecimal bust;

    private BigDecimal waist;

    private BigDecimal hip;

    private BigDecimal legLength;

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

    public BigDecimal getWeight() {
        return weight;
    }

    public void setWeight(BigDecimal weight) {
        this.weight = weight;
    }

    public BigDecimal getHeight() {
        return height;
    }

    public void setHeight(BigDecimal height) {
        this.height = height;
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

    public BigDecimal getLegLength() {
        return legLength;
    }

    public void setLegLength(BigDecimal legLength) {
        this.legLength = legLength;
    }
}