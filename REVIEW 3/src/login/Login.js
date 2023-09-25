import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';




function Login() {
  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!username||!password){
      alert("Invalid username or password");
    }
    else{
      navigate("/");
    }
    console.log('Username:', username);
    console.log('Password:', password);
  };
  return (

    <div className="App">
       
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              className='input'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='a' type="submit">Login</button>
         
        </form>
        <div>{error}</div>
      </div>
    </div>
  );
}

export default Login;