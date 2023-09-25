import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function () {
  const trains = useSelector((state) => state.trains);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectTrain = (train) => {
    dispatch({ id: train.id, type: 'TRAIN_SELECTION' });
    navigate('/selection');
  };

  return (
    <div className='avail'><br></br>
      <h1 className="text-center">Train Availability </h1>
      <h4>
      &nbsp;&nbsp;Trains for {search.from} to {search.to} on {search.date} 
      </h4>
      <div className="buses-avail-container">
        {trains.map((train) => {
          return (
            <div className="bus-avail" onClick={() => selectTrain(train)} key={train.id}>
              <div className="d-flex">
                <p className="name">{train.name}</p>
                <p className="fare">Fare:{train.fare}</p>
              </div>
              <div className="d-flex">
                <p>Arrl Time: {train.arrivalTime}</p>
                <p>Dept Time: {train.depatureTime}</p>
                <p>{train.offers}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}