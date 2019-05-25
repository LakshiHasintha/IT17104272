package com.PafProject.service;

import org.springframework.stereotype.Service;

import com.PafProject.model.User;
@Service
public interface UserService {
  
 public User findUserByEmail(String email);
 
 public void saveUser(User user);
}