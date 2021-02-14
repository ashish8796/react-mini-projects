import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { post } from '../lib/api';

const SignUpPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpForm = async (e) => {
    e.preventDefault();
    const data = { name, email, password }
    // console.log({ email, password });
    try {
      const response = await post('/sign-up', data);
      // const resData = await response.json();
      // console.log(resData)
    }
    catch (e) {
      console.log(e)
    }
    setEmail('');
    setPassword('');
    setName("")
  }

  const handleLogin = () => {
    history.push('/')
  }

  return (
    <div className="signUpContainer">
      <p>Sign Up Page</p>
      <form className="signUpForm" onSubmit={handleSignUpForm}>
        <div className="nameDiv">
          <p>Enter Your Name</p>
          <input type="text" id="name" value={name} onChange={(e) => {
            setName(e.target.value)
          }} />
        </div>

        <div className="emailDiv">
          <p>Enter Your Email</p>
          <input type="email" id="email" value={email} onChange={(e) => {
            setEmail(e.target.value)
          }} />
        </div>

        <div className="passward">
          <p>Enter Your Password</p>
          <input type="password" id="password" value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} />
        </div>

        <button type="submit" id="submitBtn">Sign Up</button>
      </form>

      <button className="login" onClick={handleLogin}>
        Login
        </button>
    </div>
  )
}

export default SignUpPage;