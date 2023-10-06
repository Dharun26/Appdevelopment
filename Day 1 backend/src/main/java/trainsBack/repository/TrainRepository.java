package trainsBack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import trainsBack.model.Train;

public interface TrainRepository extends JpaRepository<Train,Long>{

}
