package vn.techmaster.day08.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import vn.techmaster.day08.reposity.CarService;

@Configuration
public class CarConfig {
    @Bean
    public CarService carService() {
        return new CarService("MOCK_DATA.csv");
    }
}
