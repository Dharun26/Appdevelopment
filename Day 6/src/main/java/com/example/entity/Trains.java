package com.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Trains {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String Tname;
	private Long Availability;
	private String Arrpoint;
	private String Destpoint;
	
	@OneToOne
	@JoinColumn(name="user_id", nullable=false)
	private User user;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getTname() {
		return Tname;
	}

	public void setTname(String tname) {
		Tname = tname;
	}

	public Long getAvailability() {
		return Availability;
	}

	public void setAvailability(Long availability) {
		Availability = availability;
	}

	public String getArrpoint() {
		return Arrpoint;
	}

	public void setArrpoint(String arrpoint) {
		Arrpoint = arrpoint;
	}

	public String getDestpoint() {
		return Destpoint;
	}

	public void setDestpoint(String destpoint) {
		Destpoint = destpoint;
	}

}
