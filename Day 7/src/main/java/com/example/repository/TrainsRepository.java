package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entity.Trains;

import jakarta.transaction.Transactional;


@Repository
public interface TrainsRepository extends JpaRepository<Trains,Long> {
	@Transactional
	@Query(value="select c from Contacts c where c.user_id = :user_id", nativeQuery = true)
	public List<Trains> getTrainsByUserId(@Param("user_id") long user_id);
}
