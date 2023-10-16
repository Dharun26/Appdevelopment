import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



import "./Register.css"
import { userLogin} from '../Services/service';


export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('xuserToken'));
    const navigate = useNavigate();
    const [signin, setSignin] = useState({
      email:'',
      password:''
    });

    const handleChange = (e) => {

        setSignin({ ...signin, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await userLogin(signin);
        if ((res.status) == "200")  {
            console.log(res.data);
            

            localStorage.setItem('Token', res.data.token);
            // localStorage.setItem('Role', res.data.role);
            const getuid = (res.data.id);
            console.log(getuid)
            localStorage.setItem('xuserName', res.data.name);
            localStorage.setItem('xuserEmail', res.data.email);
            localStorage.setItem('xuserId', res.data.id);
            // localStorage.setItem('xuserPhone', res.data.phoneno);
            localStorage.setItem('xuserDob', res.data.dob);

            alert(` Welcome ${signin.email} !`);
            setTimeout(() => {
                navigate('/search');
            }, 1500);

        }
        else if((res.status) == "200" && (res.data.role)== "ADMIN"){

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
            localStorage.setItem('AdminEmail', res.data.email);

           alert(` Welcome ${res.data.name} !`);
            setTimeout(() => {
                navigate('/admin/dashboard');
            }, 1500);
        }
        
        else {
            alert(` Invalid Email | Password !`);
        } 
    };


    return (
        <>
            <div className="App">
         <div className="top-bar">
      <div className="logo"><br></br>GoTrain
     <h6>Your Travel partner!!!</h6>
     </div>
    </div>
<div className="login-container">
          <form className="form"onSubmit={handleSubmit}>
                           
                            <h1 className='auth-heading'>Login</h1> 
                            <input type="text" name="email" id="email" onChange={handleChange} placeholder='Email' className='auth-field' required />
                            <br></br><br></br>
                            <input type="password" name="password" id="password" onChange={handleChange} placeholder='Password' className='auth-field' required />
                            <br></br>
                            <div className='bitt'>
                            <button type='submit' className='buttt'> Login </button>
                            </div>
                            <Link to="/register" className="linkk">New User</Link>
                        </form>
                       
                      
                       
                    </div>
            <div className='toast'>
            
         </div>
         </div>
        </>
    )
}