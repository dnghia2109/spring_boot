package com.example.demo.mapper;

import com.example.demo.dto.StudentDto;
import com.example.demo.model.Student;

public class StudentMapper {
    public static StudentDto toStudentDto(Student student) {
        StudentDto studentDto = new StudentDto();
        studentDto.setId(student.getId());
        studentDto.setName(studentDto.getName());
        studentDto.setEmail(studentDto.getEmail());

        return studentDto;
    }
}
