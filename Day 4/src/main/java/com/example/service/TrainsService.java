package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.entity.Trains;
import com.example.repository.TrainsRepository;


@Service
public class TrainsService {
	@Autowired
	TrainsRepository cRepo;
	
	public List<Trains> getAll() {
		
		return cRepo.findAll();
	}
	
	
	public List<Trains> getTrainByUserId(long user_id) {
		
		return cRepo.getTrainsByUserId(user_id);
	}
	
	
	
	public List<Trains> getTrainsSortedByName(String dir) {
		
		if(dir.equalsIgnoreCase("asc")) {
			
			Sort  nameSort = Sort.by("name").ascending();
			
			return cRepo.findAll(nameSort);
		}
		else {
			
			Sort  nameSort = Sort.by("name").descending();
			
			return cRepo.findAll(nameSort);
		}
	}
	
	
	
	public Trains postTrain(Trains train) {
		
		return cRepo.save(train);	
	}
	
	public Trains updateTrain(Trains newTrain, Long id) {
		
		Trains updatedTrain = cRepo.findById(id).get();
		
		if(updatedTrain == null) {
			
			return updatedTrain;
		}
		else {
			
			updatedTrain.setTname(newTrain.getTname());
			updatedTrain.setAvailability(newTrain.getAvailability());
			updatedTrain.setArrpoint(newTrain.getArrpoint());
			updatedTrain.setDestpoint(newTrain.getDestpoint());
			updatedTrain.setUser(newTrain.getUser());
			
			return cRepo.save(updatedTrain);
		}
	}
	
	public void deleteTrain(Long id) {
		
		cRepo.deleteById(id);
	}
	
	public void deleteAllTrains() {
		
		cRepo.deleteAll();
	}
}
