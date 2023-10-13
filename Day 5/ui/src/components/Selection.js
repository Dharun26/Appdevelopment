import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectSeats } from '../store/action';

export default function Selection (){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state.details);
  const trains = useSelector((state) => state.trains);
  const selectedSeats = useSelector((state) => state.seatSelection.selectedSeats);
  const [isSeatsSelected, setIsSeatsSelected] = useState(false);
  const toggleSeat = (e) => {
    const seatNo = e.target.id;
    const updatedSelectedSeats = [...selectedSeats];

    if (updatedSelectedSeats.includes(seatNo)) {
     
      updatedSelectedSeats.splice(updatedSelectedSeats.indexOf(seatNo), 1);
    } else {
     
      updatedSelectedSeats.push(seatNo);
    }

    dispatch(selectSeats(updatedSelectedSeats));
    setIsSeatsSelected(updatedSelectedSeats.length > 0);
  };

  const proceedToPassengerDetails = (e) => {
    dispatch({ type: 'SEAT_SELECTION', seats: selectedSeats });
    navigate('/passengerInfo');
  };
  const selectedTrain =
    trains.find((train) => train.id === details.selectedTrainId) || {};
  console.log(selectedTrain);
  return (
    <div>
      <div className='sele'>
     Train name :{selectedTrain.name}
      <div className="seat-container">
        {selectedTrain.seats.map((seat, index) => {
          return (
            <div>
              <input
                className="seat"
                disabled={seat.isBooked}
                onClick={toggleSeat}
                type="checkbox"
                id={seat.no}
              />
              <label for={seat.no}><br></br>{seat.no}
              <br></br> 
              Price:{seat.price}<br></br>
              Available seats: 
              {seat.available}</label>
            </div>
          );
        })}
      </div>
      <button className="proceed" onClick={proceedToPassengerDetails} disabled={!isSeatsSelected}>
        Proceed
      </button>
      </div>
    </div>
  );
};