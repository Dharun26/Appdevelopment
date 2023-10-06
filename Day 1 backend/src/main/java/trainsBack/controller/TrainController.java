package trainsBack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import trainsBack.exception.ResourceNotFoundException;
import trainsBack.model.Train;
import trainsBack.repository.TrainRepository;

@RestController
@RequestMapping("/train")
public class TrainController {
        @Autowired
        private TrainRepository trainRepository;
        
        @GetMapping("/get")
        public List <Train> getAllTdetails(){
        	return trainRepository.findAll();
        }
        
        
        @GetMapping("/get/{trainId}")
        public ResponseEntity<Train> getTrainById(@PathVariable long trainId){
        	Train train = trainRepository.findById(trainId)
        			.orElseThrow(()-> new ResourceNotFoundException("Train does not exist with "+trainId));
        	
        	return ResponseEntity.ok(train);
        }
        
        @PostMapping("/save")
        public Train createDetails(@RequestBody Train train) {
        	return trainRepository.save(train);
        }
        
        
        
}
