package com.example.demo;

import com.example.demo.dto.StudentDto;
import com.example.demo.model.Student;
import com.example.demo.service.StudentService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class Day11ApplicationTests {

	@Autowired
	private StudentService studentService;

	@Test
	void get_all_user_test() {
		// List<Student> students = studentService.getAll();
		List<StudentDto> students = studentService.getAll();


		// In thông tin student
		students.forEach(System.out::println);

		// Định nghĩa 1 số kết quả mong muốn
		Assertions.assertThat(students).isNotNull();
		Assertions.assertThat(students.size()).isEqualTo(4);
		// Assertions.assertThat(students.size()).isEqualTo(3);
		// Assertions.assertThat(students.get(0).getName()).isEqualTo("Nguyễn Văn A");
		Assertions.assertThat(students.get(0).getName()).isEqualTo("Nguyen Van A");



	}

}
