package com.PafProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PafProject.model.Role;
import com.PafProject.model.User;
import java.lang.String;
public interface RoleRepository extends JpaRepository<User, Long> {

	Role findByRoles( String roles);
}
