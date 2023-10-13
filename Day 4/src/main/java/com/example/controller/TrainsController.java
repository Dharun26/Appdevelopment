package com.example.controller;
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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.constants.*;
import com.example.entity.Trains;
import com.example.service.TrainsService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@RequestMapping(Api.CONTACT)
public class TrainsController {
	@Autowired
	TrainsService cService;
	
	@Operation(summary = "Get all contacts")
	@ApiResponses(value = {
	        @ApiResponse(responseCode = "200", description = "Contacts list retrieved successfully")
	})
	@GetMapping("/getAll")
	public ResponseEntity<List<Trains>> getAll() {

	    List<Trains> allTrains = cService.getAll();
	    return ResponseEntity.ok(allTrains);
	}
	
	
	@Operation(summary = "Get contact by user ID")
	@ApiResponses(value = {
	        @ApiResponse(responseCode = "200", description = "Contact retrieved successfully"),
	        @ApiResponse(responseCode = "404", description = "Contact not found")
	})
	@GetMapping("/getContact/{user_id}")
	public ResponseEntity<List<Trains>> getTrainByUserId(@PathVariable("user_id") long user_id) {

	    List<Trains> train = cService.getTrainByUserId(user_id);
	  
	    return ResponseEntity.ok(train);
	}
	
	
	@Operation(summary = "Get sorted contacts by name")
	@ApiResponses(value = {
	        @ApiResponse(responseCode = "200", description = "Sorted contacts list retrieved successfully")
	})
	@GetMapping("/getSortedTrains/{dir}")
	public ResponseEntity<List<Trains>> getTrainsSortedByName(@PathVariable("dir") String dir) {

	    List<Trains> sortedTrains = cService.getTrainsSortedByName(dir);
	    return ResponseEntity.ok(sortedTrains);
	}
	
	
	@Operation(summary = "Add a new train")
	@ApiResponses(value = {
	        @ApiResponse(responseCode = "201", description = "Contact detail added successfully"),
	        @ApiResponse(responseCode = "400", description = "Invalid contact detail")
	})
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value = "/post", produces = "application/json", consumes = "application/json")
	public ResponseEntity<Trains> postTrain(@RequestBody Trains train) {

	    Trains createdTrain = cService.postTrain(train);
	    return ResponseEntity.ok(createdTrain);
	}
	
	
	@Operation(summary = "Update an existing train")
	@ApiResponses(value = {
	        @ApiResponse(responseCode = "200", description = "Contact updated successfully"),
	        @ApiResponse(responseCode = "404", description = "Contact not found")
	})
	@PutMapping("/update/{id}")
	public ResponseEntity<Trains> updateContact(@RequestBody Trains train, @PathVariable("id") Long id) {

	   Trains updatedTrain = cService.updateTrain(train, id);
	    
	    return ResponseEntity.ok(updatedTrain);
	}
	
	
	@Operation(summary = "Delete a train by ID")
	@ApiResponses(value = {
	        @ApiResponse(responseCode = "200", description = "Contact deleted successfully"),
	        @ApiResponse(responseCode = "404", description = "Contact not found")
	})
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteTrain(@PathVariable("id") Long id) {

	    cService.deleteTrain(id);
	    return ResponseEntity.ok().build();
	}
	
	
	@Operation(summary = "Delete all trains")
	@ApiResponses(value = {
	        @ApiResponse(responseCode = "200", description = "All contacts deleted successfully")
	})
	@DeleteMapping("/deleteAll")
	public ResponseEntity<Void> deleteAllContacts() {

	    cService.deleteAllTrains();
	    return ResponseEntity.ok().build();
	}
}
