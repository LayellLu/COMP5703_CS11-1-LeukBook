package com.project.leukbook;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.project.leukbook.mapper")
public class LeukbookApplication {

    public static void main(String[] args) {
        SpringApplication.run(LeukbookApplication.class, args);
    }
}
