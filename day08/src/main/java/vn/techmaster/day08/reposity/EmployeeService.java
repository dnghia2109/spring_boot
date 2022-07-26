package vn.techmaster.day08.reposity;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.databind.ObjectReader;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import org.springframework.util.ResourceUtils;
import vn.techmaster.day08.Interface.IEmployee;
import vn.techmaster.day08.model.Employee;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


public class EmployeeService implements IEmployee {
    private List<Employee> employeeList = new ArrayList<>();

    public EmployeeService(String csvFile) {
        this.readCSV(csvFile);
    }

    @Override
    public void readCSV(String csvFile) {
        try {
            File file = ResourceUtils.getFile("classpath:static/" + csvFile);
            CsvMapper mapper = new CsvMapper(); // Dùng để ánh xạ cột trong CSV với từng trường trong POJO
            CsvSchema schema = CsvSchema.emptySchema().withHeader(); // Dòng đầu tiên sử dụng làm Header
            ObjectReader oReader = mapper.readerFor(Employee.class).with(schema); // Cấu hình bộ đọc CSV phù hợp với kiểu
            Reader reader = new FileReader(file);
            MappingIterator<Employee> mi = oReader.readValues(reader); // Iterator đọc từng dòng trong file
            while (mi.hasNext()) {
                Employee employee = mi.next();
                this.addEmployee(employee);
            }
        } catch (IOException e) {
            System.out.println(e);
        }
    }

    @Override
    public void addEmployee(Employee employee) {
        int id;
        if (employeeList.isEmpty()) {
            id = 1;
        } else {
            Employee lastEmployee = employeeList.get(employeeList.size() - 1);
            id = lastEmployee.getId() + 1;
        }
        employee.setId(id);
        employeeList.add(employee);
    }

    @Override
    public List<Employee> getAll() {
        return employeeList;
    }

    @Override
    public Employee findEmpById(int id) {
        Employee curEmp = new Employee();
        for (Employee e: employeeList) {
            if (e.getId() == id) {
                curEmp = e;
            }
        }
        return curEmp;
    }

    @Override
    public void deleteEmpById(int id) {
        employeeList.remove(findEmpById(id));
    }

}
