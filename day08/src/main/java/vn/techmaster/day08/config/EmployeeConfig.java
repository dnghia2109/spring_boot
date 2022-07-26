package vn.techmaster.day08.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import vn.techmaster.day08.reposity.EmployeeService;

@Configuration
public class EmployeeConfig {
    @Bean
    public EmployeeService employeeService() {
        return new EmployeeService("day08.csv");
    }
}
