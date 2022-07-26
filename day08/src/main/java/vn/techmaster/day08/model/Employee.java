package vn.techmaster.day08.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Employee {
    @JsonIgnore
    private int id;
    private String name;
    private String email;
    private String department;
}
