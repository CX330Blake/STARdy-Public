package com.stardy.backend.controller;

import com.stardy.backend.model.User;
import com.stardy.backend.dto.UserDTO;
import com.stardy.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "https://stardywithme.com/")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody UserDTO userDTO) {
        // Optional<User> existingUser = userService.getUserByEmail(userDTO.getEmail());
        // if (existingUser.isPresent()) {
        // return ResponseEntity.badRequest().body(null);
        // }

        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setUsername(userDTO.getName());

        User createdUser = userService.createUser(user);
        return ResponseEntity.ok(createdUser);
    }

    @GetMapping("/{email}")
    public ResponseEntity<String> getUsernameByEmail(@PathVariable String email) {
        Optional<User> user = userService.getUserByEmail(email);
        return user.map(u -> ResponseEntity.ok(u.getUsername())).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/online/count")
    public ResponseEntity<Map<String, Long>> getOnlineUserCount() {
        long onlineUserCount = userService.getOnlineUserCount();
        Map<String, Long> response = new HashMap<>();
        response.put("count", onlineUserCount);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{email}")
    public ResponseEntity<User> updateUser(@PathVariable String email, @RequestBody User userDetails) {
        try {
            User updatedUser = userService.updateUserByEmail(email, userDetails);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{email}")
    public ResponseEntity<Void> deleteUserByEmail(@PathVariable String email) {
        try {
            userService.deleteUserByEmail(email);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/online/{email}")
    public ResponseEntity<User> setUserOnline(@PathVariable String email) {
        try {
            User updatedUser = userService.updateUserOnlineStatus(email, true);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/offline/{email}")
    public ResponseEntity<User> setUserOffline(@PathVariable String email) {
        try {
            User updatedUser = userService.updateUserOnlineStatus(email, false);
            return ResponseEntity.ok(updatedUser);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

}
