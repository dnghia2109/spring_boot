package com.example.exam01.service;

import com.example.exam01.model.Course;
import com.example.exam01.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    // Ví dụ demo
    // Lấy danh sách tất cả khóa học
    public List<Course> getAll(String topic, String title) {
        return courseRepository.getAll(topic, title);
    }

    // Lấy danh sách khóa học theo Type
    public List<Course> getCourseByType(String type){
        return courseRepository.getCourseByType(type);
    }

    
    // Lọc theo topic và title
    public List<Course> getCourseByTopicAndTitle(String type,String topic, String title){
        return courseRepository.getCourseByTopicAndTitle(getCourseByType(type), topic, title);
    }

}
