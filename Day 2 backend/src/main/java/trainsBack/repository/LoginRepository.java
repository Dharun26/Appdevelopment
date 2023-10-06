package trainsBack.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import trainsBack.model.Login;


public interface LoginRepository extends JpaRepository<Login, Long>{
    //all crud database methods

}
