package trainsBack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import trainsBack.model.Login;
import trainsBack.repository.LoginRepository;

@SpringBootApplication
public class SpringbootBackendApplication  {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
	
	

}