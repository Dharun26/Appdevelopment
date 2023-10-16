import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAlltrains } from '../Services/service';


export default function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [train, setTrain] = useState([]);

 
  const fetchTrains = async () => {
    try {
      const response = await getAlltrains(); 
      setTrain(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrains(); 
  }, []);

  const handle = () => {
    window.history.back();
  };

  return (
    <div className='avail'  style={{ background: '#8B0000' }}>
      <br />
      <h1 className="text-center">List of Trains</h1>
      <h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/add" className="btn btn-danger mb-2">
          Add Trains
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link className='btn btn-dark mb-2' onClick={handle}>
          Back
        </Link>
      </h4>

      <div className="buses-avail-container">
        {train.map((train) => {
          return (
            <div className="bus-avail" key={train.id}>
              <div className="d-flex">
                <p className="name">{train.tname}</p>
                <p className="fare">Available classes: {train.availability}</p>
              </div>
              <div className="d-flex">
                <p>Arrival Point: {train.arrpoint}</p>
                <p>Destination point: {train.destpoint}</p>
                <p>Arrival Time: {train.arrtime}</p>
                <p>Depature Time: {train.deptime}</p>
              </div>
            </div>
          );
        })}
      </div>
      <br></br><br></br><br></br><br></br>
    </div>
  );
}