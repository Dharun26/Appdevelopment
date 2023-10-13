import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Payment.css";

function PaymentPage() {
  const [paymentStatus, setPaymentStatus] = useState('Waiting');
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ticket = queryParams.get('ticket'); 
  const boardingPoint = queryParams.get('boardingPoint');
  const destination = queryParams.get('destination');
  const date = queryParams.get('date');
  const numberOfTickets = queryParams.get('numberOfTickets');
  const phoneNumber = queryParams.get('phoneNumber');
  const totalTicketPrice = queryParams.get('totalTicketPrice');

 
  useEffect(() => {
  
    setTimeout(() => {
      setPaymentStatus('Successful');
    }, 10000); 
  }, []);
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="payment-page">
       
         <h1>&nbsp;Payment Status</h1>
         <button className='btn btn-dark'onClick={handlePrint}>Print Page</button>
         <div className='pay'>    
      {paymentStatus === 'Waiting' ? (
        <>      
        <p>Payment Waiting...</p>

        </>
      ) : (
        <>
        
        <div className='pass' >
        <p>Payment Successful!</p>
          <div>Ticket: {ticket}</div>
          <div>Boarding point:{boardingPoint}</div>
          <div>Destination point:{destination} </div>
          <div>Date of journey:{date} </div>
          <div>No. of tickets:{numberOfTickets}</div>
          <div>Phone Number: {phoneNumber}</div>
          <div>Price: Rs. {totalTicketPrice}</div>
          <br></br>
        </div>
         <div className='happy'>
          Happy Journey!!!
         </div>
        </>
      )}
      </div>

    </div>
  );
}

export default PaymentPage;