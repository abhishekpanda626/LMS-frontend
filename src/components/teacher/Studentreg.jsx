import "../index.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../Header";
export default function Studentreg()
{
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [contact,setContact]=useState('');
  const [password,setPassword]=useState('');
  const[file,setFile]=useState('');
  const navigate=useNavigate();
async function signUpHandler(e)
{
  e.preventDefault();
  const formdata= new FormData();
formdata.append('name',name);
formdata.append('contact_no',contact);
formdata.append('email',email);
formdata.append('password',password);
formdata.append('file_path',file);
//formdata.append('image',file);
console.log(formdata);
let result=await fetch("http://localhost:8000/api/register/user",{
    method:'POST',
  body:formdata});
console.warn(result);
//localStorage.setItem("student-info", JSON.stringify(result));
//navigate('/manage/students');
}
    return(
      <>
        <div className="container-fluid" >
            <div className="row d-flex justify-content-center flex-column min-vh-100 align-items-center d-grid gap-3">
            <div  className="col-md-4 border border-3 mx-auto p-2 bg-light border " >
                    <div className="container">
                    <form>
        <h3>Student Registration</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User name"
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <label>Contact No</label>
        <div className="input-group mb-3">
       
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">+91</span>
  </div>
  <input type="text" className="form-control" placeholder="contact no" aria-label="Contact" 
  aria-describedby="basic-addon1"
  onChange={(e)=>{setContact(e.target.value)}}
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
        <div className="mb-3">
          <label>Upload Image</label>
          <input className="form-control form-control-sm" id="formFileSm" type="file"
          onChange={(e)=>setFile(e.target.files[0])}
          />
        </div>
       
        <div className="d-grid">
          <button type="submit" onClick={(e)=>signUpHandler(e)}  className="btn btn-primary">
            Register
          </button>
        </div>

      </form>
        </div>
        </div>
          </div>            
       </div> 
         </>
    )
}