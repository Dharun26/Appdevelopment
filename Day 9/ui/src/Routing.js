import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Availability from './components/Availability';
import Selection from './components/Selection';
import PassengerInfo from './components/PassengerInfo';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import BookingHistory from './components/BookingHistory';
import Search from './components/Search';
import Login from './login/Login';
import About from './login/About';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import List from './components/List';
import Faq from './components/faq';

import Register from './login/Register';
import { UserAuth } from './login/UserAuth';
import Searchh from './components/Searchh';


export default class Routing extends React.Component {
  render() {
    return (
     
      <BrowserRouter>
        <Routes>
          <Route path='/availability' element={<Availability/>}/>
          
          <Route path="/search/availability" element={<Availability />} />
          <Route path="/selection" element={<Selection/>} />
          <Route element={<UserAuth/>}>
          <Route path="/" element={<Searchh/>} />
          </Route>
          <Route path="/passengerInfo" element={<PassengerInfo />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/confirmation" element={<Confirmation/>} />
          <Route path="/history" element={< BookingHistory/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/trains' element={<List/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/register' element={<Register/>}/>
       </Routes>
       <Footer />
      </BrowserRouter>
    );
  }
}