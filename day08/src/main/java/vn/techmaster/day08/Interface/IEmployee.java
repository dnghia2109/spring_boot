package vn.techmaster.day08.Interface;

public interface IEmployee {
    void readCSV(String csvFile);
    void addEmployee(Employee employee);
    List getAll();
}
