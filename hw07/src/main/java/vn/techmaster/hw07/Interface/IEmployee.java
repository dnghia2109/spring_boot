package vn.techmaster.hw07.Interface;

import vn.techmaster.hw07.model.Employee;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public interface IEmployee {
    void readCSV(String csvFile);
    void addEmployee(Employee employee);
    List getAll();
    List sortEmpolyeeByFullName();
    List getSortedJobs();
    List getSortedCities();
    Map<String,Integer> findTop5Jobs();
    Map<String,Integer> findTop5Cities();
    HashMap<String,List> groupEmployeeByCity();
    HashMap<String,Integer> groupJobByCount(List<Employee> list);
    HashMap<String, List> findTopJobInCity();
    List find5CitiesHaveMostSpecificJob(String job);
}
