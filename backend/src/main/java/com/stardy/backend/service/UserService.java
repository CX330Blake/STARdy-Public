package com.stardy.backend.service;

import com.stardy.backend.model.User;
import com.stardy.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User updateUserByEmail(String email, User userDetails) throws Exception {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setUsername(userDetails.getUsername());
            return userRepository.save(user);
        } else {
            throw new Exception("User not found");
        }
    }

    public void deleteUserByEmail(String email) throws Exception {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            userRepository.delete(optionalUser.get());
        } else {
            throw new Exception("User not found");
        }
    }

    public User updateUserOnlineStatus(String email, boolean onlineStatus) throws Exception {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setOnlined(onlineStatus);
            return userRepository.save(user);
        } else {
            throw new Exception("User not found");
        }
    }
    public long getOnlineUserCount() {
        return userRepository.countByOnlinedTrue(); // 獲取上線人數
    }
}

