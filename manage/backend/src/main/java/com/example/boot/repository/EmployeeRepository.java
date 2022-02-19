package com.example.boot.repository;

import com.example.boot.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

/**
 * Ажилтан - Repository
 * @author TEMUUJIN
 */

@RestController
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
