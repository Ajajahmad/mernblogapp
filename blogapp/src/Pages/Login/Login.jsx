import axios from "axios";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
import {Context} from "../context/Context";
import "./Login.css";
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} = useContext(Context);

   const handleSubmit = async (e) => {
     e.preventDefault();
      dispatch({type:"LOGIN_START"});

     try {
       const res = await axios.post("/auth/login", {
         username: userRef.current.value,
         password: passwordRef.current.value,
       });
       dispatch({ type: "LOGIN_SUCCESS",payload:res.data });
       
     } catch (err) {
       dispatch({ type: "LOGIN_FAILURE" });
       alert("credential don't match");

     }
   };



  return (
    <div className="loggin">
      <span className="logginTitle">Login</span>
      <form className="logginForm" onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type="text"
          className="logginInput"
          placeholder="Enter your Username.."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="logginInput"
          placeholder="Enter your Password.."
          ref={passwordRef}
        />
        <button className="loginSubmit" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="registerButton" type="submit">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
