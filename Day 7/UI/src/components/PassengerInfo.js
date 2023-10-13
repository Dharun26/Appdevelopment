import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

export default function PassengerInfo() {
  const navigate = useNavigate();
  const selectedSeats = useSelector((state) => state.seatSelection.selectedSeats);
  const search = useSelector((state) => state.search);
  const trains = useSelector((state) => state.trains);
  const [phoneNumber, setPhoneNumber] = useState('');
  const totalPrice = selectedSeats.reduce((total, seatId) => {
    const selectedSeat = trains.flatMap((train) => train.seats).find((seat) => seat.no === seatId);
    return total + (selectedSeat ? parseFloat(selectedSeat.price) : 0);
  }, 0);
 
  const [count, setCount] = useState(1);

  const handleInputChange = (event) => {
    let inputValue = parseInt(event.target.value, 10);

    if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 4) {
      setCount(inputValue);
    }
  };
  const totalTicketPrice = totalPrice * count;
  const handlePaymentRequest = (seatId) => () => { 
    if (!phoneNumber.trim()) {
      alert('Please enter a valid phone number.');
    } else {
      const confirmation = window.confirm(
        'Payment request will be sent to ${phoneNumber} for Rs.${totalTicketPrice}. Click OK to proceed.'
      );
      if (confirmation) {
        const queryParams = new URLSearchParams();
        queryParams.append('ticket', seatId);
        queryParams.append('boardingPoint', search.from);
        queryParams.append('destination', search.to);
        queryParams.append('date', search.date);
        queryParams.append('numberOfTickets', count);
        queryParams.append('phoneNumber', phoneNumber);
        queryParams.append('totalTicketPrice', totalTicketPrice);
        navigate('/payment?${queryParams.toString()}');
      }
    }
  };

  return (
    <div className='passinfo'>
    
      <br></br>
      <h2 className='text-light'>Confirm Reservation</h2>

      {selectedSeats.map((seatId) => (
        <div className='passbox' key={seatId}>
          <div>Ticket: {seatId}</div>
          <div>Boarding point: {search.from}</div>
          <div>Destination point: {search.to} </div>
          <div>Date of journey: {search.date} </div>
          <div>
            No. of tickets:{' '}
            <input
              type='number'
              min='1'
              max='4'
              value={count}
              onChange={handleInputChange}
            />
          </div>
          <div>
            Phone number:{' '}
            <input
              type='tel'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>Price: {totalTicketPrice}</div>
          <button
            className='btn btn-dark'
            onClick={handlePaymentRequest(seatId)} 
          >
            Pay {totalTicketPrice}
          </button>
        </div>
      ))}
    </div>
  );
}