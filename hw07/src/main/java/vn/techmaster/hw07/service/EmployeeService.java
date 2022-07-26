package vn.techmaster.hw07.service;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.databind.ObjectReader;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import org.springframework.util.ResourceUtils;
import vn.techmaster.hw07.Interface.IEmployee;
import vn.techmaster.hw07.model.Employee;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import java.util.*;

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
    public List getAll() {
        return employeeList;
    }

    @Override
    public List sortEmpolyeeByFullName() {
        Collections.sort(employeeList, new Comparator<Employee>() {
            @Override
            public int compare(Employee o1, Employee o2) {
                return o1.getName().compareTo(o2.getName());
            }
        });
        return employeeList;

    }

    @Override
    public List getSortedJobs() {
        Collections.sort(employeeList, new Comparator<Employee>() {
            @Override
            public int compare(Employee o1, Employee o2) {
                return o1.getJob().compareTo(o2.getJob());
            }
        });
        return employeeList;
    }

    @Override
    public List getSortedCities() {
        Collections.sort(employeeList, new Comparator<Employee>() {
            @Override
            public int compare(Employee o1, Employee o2) {
                return o1.getCity().compareTo(o2.getCity());
            }
        });
        return employeeList;
    }

    @Override
    public Map<String, Integer> findTop5Jobs() {

        return null;
    }

    @Override
    public Map<String, Integer> findTop5Cities() {
        return null;
    }

    @Override
    public HashMap<String, List> groupEmployeeByCity() {
        return null;
    }

    @Override
    public HashMap<String, Integer> groupJobByCount(List<Employee> list) {
        return null;
    }

    @Override
    public HashMap<String, String> findTopJobInCity() {
        return null;
    }

    @Override
    public List find5CitiesHaveMostSpecificJob(String job) {
        return null;
    }
}
