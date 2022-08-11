package com.example.todolist.controller;


import com.example.todolist.model.Todo;
import com.example.todolist.request.CreateTodoRequest;
import com.example.todolist.request.UpdateTodoRequest;
import com.example.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController()
@RequestMapping("api/")
public class TodoController {

    @Autowired
    private TodoService todoService;

//    @GetMapping("/get-all")
//    public List<Todo> getAll() {
//        return todoService.getTodoList();
//    }

    @GetMapping("/todos")
    public List<Todo> getTodos(@RequestParam Optional<Boolean> status) {
        if (status.isPresent()) {
            return todoService.getTodoList(status.get());
        }
        return todoService.getTodoList();
    }

    // Tạo mới Todo
    @PostMapping("/todos")
    public Todo createTodo(@RequestBody CreateTodoRequest request) {
        return todoService.createNewTodo(request);
    }

    // Cập nhật todo
    @PutMapping("/todos/{id}")
    public Todo updateTodo(@PathVariable int id, @RequestBody UpdateTodoRequest request) {
        return todoService.updateTodo(id, request);
    }


    // Xóa todo
    @DeleteMapping("todos/{id}")
    public void deleteTodo(@PathVariable int id) {
        todoService.deleteTodo(id);
    }
}
