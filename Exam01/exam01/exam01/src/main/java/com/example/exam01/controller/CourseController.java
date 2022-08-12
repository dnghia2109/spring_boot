package com.example.exam01.controller;

import com.example.exam01.model.Course;
import com.example.exam01.service.CourseService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CourseController {
    @Autowired
    private CourseService courseService;
    // Ví dụ demo
    // Lấy danh sách tất cả khóa học
    @GetMapping("/courses")
    public List<Course> getCourseByType(@RequestParam Optional<String> topic,@RequestParam Optional<String> title){
        return courseService.getAll(topic.orElse(""), title.orElse(""));
    }

//    // Lấy danh sách khóa học theo type
//    @GetMapping("/courses/{type}")
//    public List<Course> getByType(@PathVariable String type) {
//        return courseService.getCourseByType(type);
//    }

    //Lọc theo topic và title
    @GetMapping("/courses/{type}")
    public List<Course> filterCourse(@PathVariable String type, @RequestParam Optional<String> topic, @RequestParam Optional<String> title){
        return courseService.getCourseByTopicAndTitle(type, topic.orElse(""), title.orElse(""));
    }





}
