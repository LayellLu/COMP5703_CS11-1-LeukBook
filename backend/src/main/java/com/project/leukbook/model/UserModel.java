package com.project.leukbook.model;

public class UserModel {

    private Integer id;


    private String email;


    private String password;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public UserBodyModel userBodyModel;

    public UserBodyModel getUserBodyModel() {
        return userBodyModel;
    }

    public void setUserBodyModel(UserBodyModel userBodyModel) {
        this.userBodyModel = userBodyModel;
    }
}
