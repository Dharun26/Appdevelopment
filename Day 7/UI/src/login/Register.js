import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { userRegister } from "../Services/service";
import {ToastContainer, toast} from "react-toastify";
import "./Register.css"
export default () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
      name: '',
      phone: 0,
      email: '',
      password: '',
      dob:'',
      role:'customer'
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
    const res = await userRegister(signup);
    if (res.status === 200) {
      // Data was successfully inserted into the database
      toast.success('Signup Successful!', {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } else {
      // Handle other responses (e.g., validation errors)
      toast.error('Something went wrong!', {
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
    console.error("Axios Error:", error);
    // Handle the Axios error here
    toast.error('Something went wrong!', {
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
  }
  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.id]: e.target.value });
};


    return (
      <div className="App">
         <div className="top-bar">

      <div className="logo"><br></br>GoTrain
     <h6>Your Travel partner!!!</h6>
      </div>
    </div>
<div className="login-container">

          <h2>Register</h2>
          <form className="form"onSubmit={handleSubmit}>
                            <input type="text" name="name" id="name" onChange={handleChange} placeholder='Name' className='auth-field' required /><br></br><br></br>
                            <input type="text" name="phone" id="phone" onChange={handleChange} placeholder='Phone' className='auth-field' required /><br></br><br></br>
                            <input type="text" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required /><br></br><br></br>
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required /><br></br><br></br>
                            <input type="text" name="dob" id="dob" onChange={handleChange} placeholder='date of birth' className='auth-field' required />
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