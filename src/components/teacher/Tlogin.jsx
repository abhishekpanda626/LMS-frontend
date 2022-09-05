import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
export default function Login()
{

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate= useNavigate();
   // console.log(email,password);  
async function signInHandler(e)
{
  e.preventDefault() ; 
  let data={password,email};
  console.warn(data);
  let result=await fetch("http://127.0.0.1:8000/api/login/admin",{
    method:'POST',
    headers:{'Content-Type':'application/json',
              'Accept':'application/json'
  },
  body:JSON.stringify(data)
});
result = await result.json();
localStorage.setItem('teacher-info',JSON.stringify(result));
navigate('/teacher/profile');
}
    return(
       
      <>
    
       <div className="container-fluid" >
            <div  className="row d-flex justify-content-center flex-column min-vh-100 align-items-center d-grid gap-3">
          <div className="col-md-4 border border-3 mx-auto p-2 bg-light border " >
          <form onSubmit={(e)=>signInHandler(e)}>
       <center><h3> Sign In as Teacher</h3></center> 
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
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign-in
          </button>
        </div>
        <br />
        <center><p >
         Not a Member ? <a style={{textDecoration:'none'}} href="/teacher/signup">Signup</a>
        </p>
</center>  
      </form>
            </div>
          </div>
           
        </div>
      </>
    )
}