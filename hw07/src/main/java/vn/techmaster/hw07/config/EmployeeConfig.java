package vn.techmaster.hw07.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import vn.techmaster.hw07.service.EmployeeService;

@Configuration
public class EmployeeConfig {
    @Bean
    public EmployeeService EmService() {
        return new EmployeeService("hw07.csv");
    }

}
