import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { post } from "../lib/api";

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    history.push('/signup')
  }

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const data = { email, password }
    // console.log({ email, password });
    try {

      const response = await post('/login', data);
      // const resData = await response.json();
      // console.log(resData)
    }
    catch (e) {
      console.log(e)
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className="loginContainer">
      <p>Login Page</p>
      <form className="loginForm" onSubmit={handleLoginForm}>

        <div className="emailDiv">
          <p>Enter Your Email</p>
          <input type="email" id="email" value={email} onChange={(e) => {
            // console.log(e.target.value)
            setEmail(e.target.value)
          }} />
        </div>

        <div className="password">
          <p>Enter Your Password</p>
          <input type="password" id="password" value={password} onChange={(e) => {
            // console.log(e.target.value)
            setPassword(e.target.value)
          }} />
        </div>

        <button type="submit" id="submitBtn">Login</button>
      </form>

      <button className="signUp" onClick={handleSignUp}>
        Sign Up
          </button>
    </div>
  )
}

export default LoginPage;