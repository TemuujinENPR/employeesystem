package com.example.boot.service;

import com.example.boot.model.Employee;

import java.util.List;

/**
 * Ажилтан - Service
 * @author TEMUUJIN
 */

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public List<Employee> getAllEmployees();
}
