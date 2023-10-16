import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createTrain, userRegister } from "../Services/service";
import {ToastContainer, toast} from "react-toastify";

export default () => {
  const navigate = useNavigate();

  const [train, setTrain] = useState({

      tname:'',
      arrpoint:'',
      destpoint:'',
      availability:'',
      arrtime:'',
      deptime:''

  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    const jwt= localStorage.getItem('Token');
    const res = await createTrain(train,jwt);
    console.log(res); // Add this line after the API request

    if (res.status === 200) {
      // Data was successfully inserted into the database
      
      alert("train added successfully");
      setTimeout(() => {
        navigate('/trains');
      }, 1500);
    } else {
        toast.error(`Something went wrong!`, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }
  } catch (error) {
    console.error(error);
    alert("error");
   
  }
  }
  const handleChange = (e) => {
    setTrain({ ...train, [e.target.id]: e.target.value });
};


    return (
      <div className="App">
         <div className="top-bar">

      <div className="logo"><br></br>GoTrain
     <h6>Your Travel partner!!!</h6>
      </div>
    </div>
<div className="login-container">

          <h2>Add Train</h2>
          <form className="form"onSubmit={handleSubmit}>

                            <input type="text" name="tname" id="tname" onChange={handleChange} placeholder='Train Name' className='auth-field' required /><br></br><br></br>
                            <input type="text" name="arrpoint" id="arrpoint" onChange={handleChange} placeholder='Start point' className='auth-field' required /><br></br><br></br>
                            <input type="text" name="destpoint" id="destpoint" onChange={handleChange} placeholder='End Point' className='auth-field' required /><br></br><br></br>
                            <input type="number" name="availablity" id="availability" onChange={handleChange} placeholder='Availablity' className='auth-field' required />
                            <input type="text" name="arrtime" id="arrtime" onChange={handleChange} placeholder='Arrival Time' className='auth-field' required />
                            <input type="text" name="deptime" id="deptime" onChange={handleChange} placeholder='Departure Time' className='auth-field' required />
                         <br></br>
                            <button type='submit' className='bu'> Register </button>
                            <div>
                           <Link to="/login" className="linkk">Already have an account</Link>
                           </div>
          </form>
          </div>
          <div className="toast">
          <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            </div>
        </div>
       
     
    );
  };