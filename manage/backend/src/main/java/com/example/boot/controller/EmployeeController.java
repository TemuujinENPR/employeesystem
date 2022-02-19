package com.example.boot.controller;

import com.example.boot.model.Employee;
import com.example.boot.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Ажилтан - Controller
 * @author TEMUUJIN
 */

@RestController
@RequestMapping("/employee")
@CrossOrigin
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/create")
    public String create(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
        return "Added new employee";
    }

    @GetMapping("/getAll")
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }
}
