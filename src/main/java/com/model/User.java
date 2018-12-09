package com.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.*;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @NotNull
    @Pattern(regexp = "[a-zA-Z]+")
    private String name;

    @NotNull
    @Pattern(regexp = "[a-zA-Z]+")
    private String surname;

    @NotNull
    private boolean gender;

    @Max(150)
    @NotNull
    @Positive
    private int age;

    @Email(regexp = "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$")
    @NotNull
    private String email;

}