package com.example.todolist.service;

import com.example.todolist.exception.BadRequestException;
import com.example.todolist.exception.NotFoundException;
import com.example.todolist.model.Todo;
import com.example.todolist.request.CreateTodoRequest;
import com.example.todolist.request.UpdateTodoRequest;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TodoService {
    List<Todo> todoList = new ArrayList<>();

    public TodoService() {
        todoList.add(new Todo(1, "Đi học", true));
        todoList.add(new Todo(2, "Đi làm", true));
        todoList.add(new Todo(3, "Đi về", false));
        todoList.add(new Todo(4, "Làm bài", true));
        todoList.add(new Todo(5, "Đá bóng", false));
    }

    // Lấy ds tất cả công việc

    public List<Todo> getTodoList() {
        return todoList;
    }


    // Lấy ds công việc theo trạng thái
    public List<Todo> getTodoList(boolean status) {
        if (status) {
            return todoList.stream().filter(todo -> todo.isStatus()).collect(Collectors.toList());
        }
        return todoList.stream().filter(todo -> !todo.isStatus()).collect(Collectors.toList());
    }

    // Tạo công việc
    public Todo createNewTodo(CreateTodoRequest request) {
        if (request.getTitle().trim().equals("")) {
            throw new BadRequestException("Tiêu đề không được để trống.");
        }

        Random random = new Random();
        Todo todo = new Todo(random.nextInt(1000), request.getTitle(), false);
        todoList.add(todo);

        return todo;
    }



    // Cập nhật công việc
    public Todo updateTodo(int id, UpdateTodoRequest request) {
        Todo todo = findById(id).orElseThrow(() -> {
            throw new NotFoundException("Không tìm thấy công việc này.");
        });

        if (request.getTitle().trim().equals("")) {
            throw new BadRequestException("Tiêu đề không được để trống.");
        }

        todo.setTitle(request.getTitle());
        todo.setStatus(request.isStatus());

        return todo;
    }



    // Xóa công việc
    public void deleteTodo(int id) {
        Todo todo = findById(id).orElseThrow(() -> {
           throw new NotFoundException("Không tìm thấy công việc này.");
        });

        todoList.remove(todo);
    }


    public Optional<Todo> findById(int id) {
        return todoList.stream().filter(todo -> todo.getId() == id).findFirst();
    }
}
