package com.example.demo.controller;

import com.example.demo.dto.StudentDto;
import com.example.demo.model.Student;
import com.example.demo.request.CreateStudentRequest;
import com.example.demo.request.UpdateStudentRequest;
import com.example.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


// HTTP method : GET, POST, PUT, DELETE
// GET /api/v1/students : Lấy ra danh sách sv
// POST /api/v1/students : Tạo mới sinh viên
// GET /api/v1/students/{id} : Lấy ra thông tin sv theo id
// PUT /api/v1/students/{id} : Lấy thông tin sv theo id
// DELETE /api/v1/students/{id} : Xóa thông tin sv theo id
// GET /api/v1/students/search?name=laiduynghia : Lấy ra thông tin sv có tên "laiduynghia"

// GET /api/v1/students/{id}/courses : Lấy ra danh sách khóa học của sv theo id
// POST /api/v1/students/{id}/courses : Tạo mới khóa học của sv theo id


@RestController
@RequestMapping("api/v1")
public class StudentController {
    @Autowired
    private StudentService service;

    @GetMapping("/students")
    public List<StudentDto> getAllStudent() {
        return service.getAll();
    }

    // Lấy thông tin sv theo id
    @GetMapping("/students/{id}")
    public StudentDto getStudentById(@PathVariable int id) {
        return service.getStudentById(id);
    }

    //Xóa sv
    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable int id) {
        service.deleteStudentById(id);
    }

    //Tìm kiếm sv
    @GetMapping("/students/search")
    public List<StudentDto> searchStudent(@RequestParam String name) {
        return service.searchStudentByName(name);
    }

    // Thêm sv
    @PostMapping("/students")
    public StudentDto addNewStudent(@RequestBody CreateStudentRequest request) {
        return service.createNewStudent(request);
    }

    // Update info student (name or pass)
    @PutMapping("students/{id}")
    public StudentDto updateInfoStudent(@PathVariable int id, @RequestBody UpdateStudentRequest request) {
        return service.updateStudent(id, request);
    }
}
