package vn.techmaster.hw07.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import vn.techmaster.hw07.Interface.IEmployee;
import vn.techmaster.hw07.model.Employee;

import java.util.List;
@Controller
@RequestMapping("/")
public class EmployeeController {
    @Autowired
    private IEmployee employeeService;

    @GetMapping("/all")
    public List<Employee> getAllEmployee() {
        return employeeService.getAll();
    }
}
