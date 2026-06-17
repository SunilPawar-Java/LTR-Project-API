package com.ltr.controller;

import com.ltr.dao.UsersDao;
import com.ltr.module.Users;
import com.ltr.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/user")
public class AuthController {

    private final UsersService usersService;

    public AuthController(UsersService usersService) {
        this.usersService = usersService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Users user) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usersService.createUser(user));
    }

    @PostMapping("/registeradmin")
    public Users registerAdmin(@RequestBody Users user) {
        return usersService.createAdmin(user);
    }

    @GetMapping("get/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.FOUND).body(usersService.getUser(id));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody UsersDao usersDao){
        return ResponseEntity.ok(usersService.updateUserProfile(id, usersDao));
    }

    @PatchMapping("/password/{id}")
    public ResponseEntity<?> changePassword(@PathVariable Long id, @RequestBody String password){
        return ResponseEntity.ok(usersService.updatePassword(id, password));
    }

    @PatchMapping("/username/{id}")
    public ResponseEntity<?> changeUsername(@PathVariable Long id, @RequestBody String username){
        return ResponseEntity.ok(usersService.changeUsername(id, username));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAccount(@PathVariable Long id){
        return ResponseEntity.ok(usersService.deleteAccount(id));
    }
}
