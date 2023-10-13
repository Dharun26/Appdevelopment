import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function List () {
  const trains = useSelector((state) => state.trains);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  return (
    <div className='avail'><br></br>
      <h1 className="text-center">List of Trains </h1>
      <h4>
    
      </h4>
      <div className="buses-avail-container">
        {trains.map((train) => {
          return (
            <div className="bus-avail" >
              <div className="d-flex">
                <p className="name">{train.name}</p>
                <p className="fare">Fare:{train.fare}</p>
              </div>
              <div className="d-flex">
                <p></p>
                <p></p>
                <p>{train.offers}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}