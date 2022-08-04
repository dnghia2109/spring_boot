package com.example.demo.service;

import com.example.demo.dto.StudentDto;
import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.NotFoundException;
import com.example.demo.mapper.StudentMapper;
import com.example.demo.model.Student;
import com.example.demo.request.CreateStudentRequest;
import com.example.demo.request.UpdateStudentRequest;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class StudentService {

    @Autowired
    private ModelMapper modelMapper;

    private List<Student> students;

    public StudentService() {
        students = new ArrayList<>();
        students.add(new Student(1, "Nguyen Van A", "a@gmail.com", "123"));
        students.add(new Student(2, "Nguyen Van B", "b@gmail.com", "123"));
        students.add(new Student(3, "Nguyen Van C", "c@gmail.com", "123"));
        students.add(new Student(4, "Nguyen Van D", "d@gmail.com", "123"));
    }

    // Lấy ra ds tất cả sv
//    public List<Student> getAll() {
//        return students;
//    }

//    Chuyển từ Student -> StudentDto
//    Cách 1:
//    public List<StudentDto> getAll() {
//        return students.stream().map(StudentMapper::toStudentDto)
//                .collect(Collectors.toList());
//    }

    public List<StudentDto> getAll() {
        return students.stream().map(student -> modelMapper.map(student, StudentDto.class))
                .collect(Collectors.toList());
    }

    // Lấy thông tin sinh viên theo id:
    public StudentDto getStudentById(int id) {
//        Optional<Student> studentOptional = findById(id);
//
//        if (studentOptional.isPresent()) {
//            Student student = studentOptional.get();
//            return modelMapper.map(student, StudentDto.class);
//        }
//
//        throw new NotFoundException("Không có sinh viên có id = " + id);

         Student student = findById(id).orElseThrow(() -> {
             throw new NotFoundException("Không có sinh viên có id = " + id);
         });

         return modelMapper.map(student, StudentDto.class);
    }

    // Delete student by id
    public void deleteStudentById(int id) {
        Student student = findById(id).orElseThrow(() -> {
            throw new NotFoundException("Không có sinh viên có id = " + id);
        });

        students.remove(student);
    }

    // Find student by name
    public List<StudentDto> searchStudentByName(String name) {
        return students.stream()
                .filter(student -> student.getName().toLowerCase().contains(name.toLowerCase()))
                .map(student -> modelMapper.map(student, StudentDto.class))
                .collect(Collectors.toList());

    }


    // Add new student
    public StudentDto createNewStudent(CreateStudentRequest request) {
        if (findByEmail(request.getEmail()).isPresent()) {
            throw new BadRequestException("Email = " + request.getEmail() + "đã tồn tại !");
        }
        Random rd = new Random();
        Student newStudent = new Student();
        newStudent.setId(rd.nextInt(100));
        newStudent.setName(request.getName());
        newStudent.setEmail(request.getEmail());
        newStudent.setPassword(request.getPassword());
        students.add(newStudent);

        return modelMapper.map(newStudent, StudentDto.class);
    }


    // Update info student
    public StudentDto updateStudent(int id, UpdateStudentRequest request) {
        Student studentUpdate = findById(id).orElseThrow(() -> {
            throw new NotFoundException("Không có sinh viên có id = " + id);
        });

        studentUpdate.setName(request.getName());
        studentUpdate.setPassword(request.getPassword());
        students.set(id, studentUpdate);

        return modelMapper.map(studentUpdate, StudentDto.class);
    }


    // Helper method with id
    public Optional<Student> findById(int id) {
        return students.stream()
                .filter(student -> student.getId() == id).findFirst();
    }

    // Helper method with email
    public Optional<Student> findByEmail(String email) {
        return students.stream()
                .filter(student -> student.getEmail().equals(email)).findFirst();
    }



}
