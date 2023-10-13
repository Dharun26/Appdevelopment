import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import './about.css';
import { useDispatch } from 'react-redux';


export default function About(){
  

  return (
    <div className='background'>
      <div className="top-bar">
    <div className="logo">About us</div>
    
  </div>
      <br></br><br></br><br></br><br></br><br></br>
     <div className='dora'>&nbsp;&nbsp;&nbsp;Indian Railway Catering and Tourism Corporation Ltd. (IRCTC) is a “Mini Ratna (Category-I)” Central Public Sector Enterprise under Ministry of Railways, Government of &nbsp;&nbsp;&nbsp;India. 
     IRCTC was incorporated on 27th September, 1999 as an extended arm of the Indian Railways to upgrade, professionalize and manage the catering and hospitality &nbsp;&nbsp;&nbsp;services at stations, 
     on trains and other locations and to promote domestic and international tourism through development of budget hotels, special tour packages, &nbsp;&nbsp;&nbsp;information & commercial publicity and global reservation systems. The authorized capital of the company is 250 crores and paid up capital is 160 crores. It’s registered and &nbsp;&nbsp;&nbsp;Corporate Office is situated at New Delhi.
     </div>
     <br></br><br></br><br></br><br></br>
    <div className='kenya'>
        <button><Link to="/"> Book Tickets </Link></button></div>
    </div>
   
    
  );
};