import "./signup.css";
import React, { useState } from "react";
import Header from "./Header.jsx"
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate=useNavigate();

 const [form, fixform]=useState({
  name:"",
  email:"",
  password:"",
  cpassword:""
 })

 const [error,fixError]=useState("");

 const submit=(e)=>{
  e.preventDefault();

  if(!form.name || !form.email || !form.password){
    fixError("All fields are required!");
    return;
  }

  if(!(form.password === form.cpassword)){
    fixError("Passwords are not matched!");
    return;
  }

  const hasLetter = /[A-Za-z]/.test(form.password);
  const hasNumber =/\d/.test(form.password);

  if(!hasLetter || !hasNumber){
    fixError("Password must contain at least one letter and one number!");
    return;
  }

  if(form.password.length<6){
    fixError("Password must conatain at least 6 characters!");
    return;
  }

  fixError("");
  alert("signup successful!");
  navigate("/");
 }

 const change = (e) =>{
  fixform({
    ...form,
    [e.target.name]:e.target.value
  })
 }

 return(
  <>
  <Header/>
  <br></br>
  <div id="box">
    <br></br>
    <form onSubmit={submit}>
      <h1>Sign Up</h1>
      <input type="text" name="name" placeholder="Username" value={form.name} onChange={change}></input>
      <input type="email" name="email" placeholder="Email" value={form.email} onChange={change}></input>
      <input type="password" name="password" placeholder="Password" value={form.password} onChange={change}></input>
      <input type="password" name="cpassword" placeholder="Confirm Password" value={form.cpassword} onChange={change}></input>
      <button type="submit">Sign up</button>
      {error ? <p style={{color:"red"}}>{error}</p>:null}
  </form>
  </div></>
  
  
 )
}

export default Signup;