package vn.techmaster.day08.Interface;

import vn.techmaster.day08.model.Employee;

import java.util.List;

public interface IEmployee {
    void readCSV(String csvFile);
    void addEmployee(Employee employee);
    List<Employee> getAll();

    public Employee findEmpById(int id);
    public void deleteEmpById(int id);
}
