package com.controller;

import com.model.User;
import com.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/{id}")
    public User get(@PathVariable Long id) {
        return repository.findById(id).get();
    }

    @PostMapping("/save")
    public User save(@Valid @RequestBody User user) {
        return repository.save(user);
    }

    @PutMapping("/update")
    public User update(@Valid @RequestBody User user) {
        return repository.save(user);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @GetMapping
    public List<User> findAll(){
        return repository.findAll();
    }

}
