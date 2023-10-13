import React, { useState } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';
import './search.css';
import { useDispatch } from 'react-redux';


export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState({ from: '', to: '', date: '' });

  const [isValidated, setIsValidated] = useState(false);
  const [showError, setError] = useState(false);
  const updateValue = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const searchForTrains = () => {
    setIsValidated(true);
    const currentDate = new Date();
    const selectedDate = new Date(search.date);
    const from=search.from;
    const to =search.to;
    if (!search.from || !search.to || !search.date||selectedDate<currentDate||from==to) {
      setError(true);
      console.log(search);
      return;
    }
    dispatch({ search, type: 'SEARCH_TRAIN' });
    navigate('availability');
  };

  return (
    <div className='background'>
      <div className="top-bar">
    <div className="logo">GoTrain
   <h6> Your Travel partner!!!</h6>
    </div>
    <ul className="nav-menu">
      <li><a href="/trains">Home</a></li>
      <li><a href="/trains">Trains</a></li>
      <li><a href="/about">About us</a></li>
      <li><a href="/login">Login</a></li>
     
    </ul>
  </div>
 
      <br></br><br></br><br></br><br></br><br></br>
    <div
      class="search-container"
      className={
        isValidated ? 'was-validated search-container' : 'search-container'
      }
    >
      <h2> Search Trains</h2>
     
      <div className="form-group">
        <label>
          From:
          <input required type="text" name="from" onChange={updateValue} />
        </label>
      </div>

      <div className="form-group">
        <label>
          To:
          <input required type="text" name="to" onChange={updateValue} />
        </label>
      </div>

      <div className="form-group">
        <label>
          Date:
          <input required type="date" name="date" onChange={updateValue} />
        </label>
      </div>
      <button onClick={searchForTrains}> Search </button>
    </div>
    <br>
    </br>
    <div className='alllert'>
    {showError ? <p class="error-alert box-small"> Enter valid data </p> : ''}
    </div><br></br><br></br>
    
    </div>
    
  );
};