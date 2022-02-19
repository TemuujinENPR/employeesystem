package com.example.boot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Ажилтан - Model
 * @author TEMUUJIN
 */

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //ID
    private String firstName; //Нэр
    private String lastName; //Овог
    private String gender; //Хүйс
    private String email; //И-Мэйл
    private int number; //Дугаар
    private String country; //Улс
    private String city; //Хот
    private String department; //Хэлтэс
    private BigDecimal salary; //Цалин
}
