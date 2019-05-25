package org.websparrow;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"org.websparrow.controller"})
public class App {

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}
}
