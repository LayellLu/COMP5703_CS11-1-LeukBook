package com.project.leukbook;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@SpringBootApplication
@MapperScan("com.project.leukbook.mapper")
public class LeukbookApplication implements ErrorController {

    public static void main(String[] args) {
        SpringApplication.run(LeukbookApplication.class, args);
    }

    @RequestMapping(value = "/error")
    public String error() {
        return "forward:/index.html";
    }
}
