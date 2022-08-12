package com.example.exam01.repository;

import com.example.exam01.database.FakeDB;
import com.example.exam01.model.Course;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class CourseRepository {
    // Repository : Chứa các phương thức để thao tác với database

    // Lấy danh sách tất cả khóa học
    public List<Course> getAll(String topic, String title) {
        if(topic != null){
            if(title == null){
                return getCourseByTopic(topic);
            }else{
                return getCourseByTopicAndTitle(FakeDB.courses, topic, title);
            }
        }else{
            if(title == null){
                return FakeDB.courses;
            }else{
                return getCourseByTitle(title);
            }
        }


    }

    // Lấy danh sách khóa học theo type
    public List<Course> getCourseByType(String type) {
        return FakeDB.courses.stream()
                .filter(course -> course.getType().equals(type))
                .collect(Collectors.toList());
    }


    // Tìm khóa học theo topic và title
    public List<Course> getCourseByTitle(String title) {
        return FakeDB.courses.stream()
                .filter(course -> course.getTitle().toLowerCase().contains(title.toLowerCase()))
                .collect(Collectors.toList());
    }


    public List<Course> getCourseByTopic(String topic) {
        List<Course> courses = FakeDB.courses;
        List<Course> rs = new ArrayList<>();
        for (Course course : courses) {
            for (int i = 0; i < course.getTopics().toArray().length; i++) {
                if (course.getTopics().toArray()[i].equals(topic)) {
                    rs.add(course);
                }
            }
        }
        return rs;
    }


    // Lọc khóa học theo topic và title
    public List<Course> getCourseByTopicAndTitle(List<Course> listCourse, String topic, String title) {
        if (topic == "") {
            if (title != "") {
                return listCourse.stream()
                        .filter(course -> course.getTitle().toLowerCase().contains(title.toLowerCase()))
                        .collect(Collectors.toList());
            } else {
                return listCourse;
            }
        }

        if (title == "") {
            return listCourse.stream()
                    .filter(course -> course.getTopics().contains(topic))
                    .collect(Collectors.toList());
        } else {
            return listCourse.stream()
                    .filter(course -> course.getTitle().toLowerCase().contains(title.toLowerCase()) && course.getTopics().contains(topic))
                    .collect(Collectors.toList());
        }
    }


    // Lấy khóa học theo id
    public Optional<Course> findById(int id){
        return FakeDB.courses.stream()
                .filter(course -> course.getId() == id)
                .findFirst();
    }





}
