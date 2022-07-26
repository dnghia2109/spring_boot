package vn.techmaster.day08.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import vn.techmaster.day08.Interface.IEmployee;
import vn.techmaster.day08.model.Employee;
import vn.techmaster.day08.reposity.EmployeeService;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("")
public class EmployeeController {
    @Autowired
    private IEmployee employeeService;

    @GetMapping("/all")
    public String getAllEmployee(Model model) {
        List<Employee> ems = employeeService.getAll();
        model.addAttribute("ems", ems);

        return "index";
    }


//    @GetMapping("/update")
//    public String updateEmployee(Model model, int updateId) {
//
//    }

    @GetMapping("/delete/{id}")
    public String deleteEmp(@PathVariable int id) {
        employeeService.deleteEmpById(id);
        return "redirect:/index";
    }
    
}
