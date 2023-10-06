package trainsBack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import trainsBack.exception.ResourceNotFoundException;
import trainsBack.model.Login;
import trainsBack.repository.LoginRepository;

@RestController
@RequestMapping("/train_booking")
public class LoginController {
	
    @Autowired
    private LoginRepository loginRepository;
    
    
    @GetMapping("/get")
    public List<Login> getAllLogins(){
    	return loginRepository.findAll();
    	
    }
    
    @GetMapping("/get/{id}")
    public ResponseEntity<Login> getLoginById(@PathVariable long id) {
    	Login login = loginRepository.findById(id)
    			.orElseThrow(() -> new ResourceNotFoundException("User not existed:"+ id));
        return ResponseEntity.ok(login);
    }
    
    @PostMapping("/save")
    public Login createLogin(@RequestBody Login login) {
    	return loginRepository.save(login);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<Login> updateLogin(@PathVariable long id,@RequestBody Login logindetails){
    	Login updateLogin=loginRepository.findById(id)
    			.orElseThrow(()-> new ResourceNotFoundException("User not exist with id: "+id));
    	updateLogin.setEmail(logindetails.getEmail());
    	updateLogin.setPassword(logindetails.getPassword());
    	
    	loginRepository.save(updateLogin);
    	return ResponseEntity.ok(updateLogin);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable long id){
    	Login login=loginRepository.findById(id)
    			.orElseThrow(()->new ResourceNotFoundException(""));
    	loginRepository.delete(login);
    	return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    
    }
    
}
