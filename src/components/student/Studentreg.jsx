import "../index.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../Header";
export default function Studentreg()
{

  useEffect(()=>{
    if(localStorage.getItem('student-info'))
    {
      navigate('/student/profile')
    }
  },[]);
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
async function signUpHandler(e)
{
  e.preventDefault();
  let data={name,password,email};
  console.warn(data);
 let result=await fetch("http://127.0.0.1:8000/api/register/user",{
    method:'POST',
    headers:{'Content-Type':'application/json',
              'Accept':'application/json'
  },
  body:JSON.stringify(data)

});
result= await result.json();
console.warn(result);
localStorage.setItem("student-info", JSON.stringify(result));
navigate('/student/profile');
}
    return(
      <>
        <div className="container-fluid" >
            <div className="row d-flex justify-content-center flex-column min-vh-100 align-items-center d-grid gap-3">
            <div  className="col-md-4 border border-3 mx-auto p-2 bg-light border " >
                    <div className="container">
                    <form>
        <h3>Sign Up as Student</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User name"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" onClick={(e)=>signUpHandler(e)}  className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a style={{textDecoration:'none'}} href="/student/login">sign in?</a>
        </p>
      </form>
        </div>
        </div>
          </div>            
       </div> 
         </>
    )
}