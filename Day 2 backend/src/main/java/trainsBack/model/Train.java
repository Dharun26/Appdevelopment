package trainsBack.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="ttrainss")
public class Train {
	 
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
     private long trainId;
     
	@Column(name="trainname")
     private String trainname;
	
	@Column(name="startloc")
	private String startloc;
	
	@Column(name="endloc")
	private String endloc;
	
	public long getTrainId() {
		return trainId;
	}
	public void setId(long trainId) {
		this.trainId = trainId;
	}
	public String getTrainname() {
		return trainname;
	}
	public void setTrainname(String trainname) {
		this.trainname = trainname;
	}
	public String getStartloc() {
		return startloc;
	}
	public void setStartloc(String startloc) {
		this.startloc = startloc;
	}
	public String getEndloc() {
		return endloc;
	}
	public void setEndloc(String endloc) {
		this.endloc = endloc;
	}
     
}
