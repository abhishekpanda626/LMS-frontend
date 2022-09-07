import "../index.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../Header";
export default function UpdateStudent()
{
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  const [contact,setContact]=useState('');
  const [password,setPassword]=useState('');
  const[file,setFile]=useState('');
  const navigate=useNavigate();
  const [data,setData]=useState([]);
  var sid=localStorage.getItem('sid');

  function fetchuser()
  {
    fetch("http://127.0.0.1:8000/api/users/get/"+sid)
    .then((res) =>
        res.json())
  
    .then((data) => {
        //console.log(data);
        setData(data);
       // setPosts(data)
    },)
  }
  useEffect( ()=>{
     fetchuser();
  },[])





async function updateHandler(e,id)
{
  e.preventDefault();
  const formdata= new FormData();
formdata.append('name',name);
formdata.append('contact_no',contact);
formdata.append('email',email);
formdata.append('password',password);
//formdata.append('image',file);
//formdata.append('image',file);
console.log(formdata);
let result=await fetch("http://localhost:8000/api/users/update/"+id+"?_method=PUT",{
    method:'POST',
  body:formdata});
console.warn(result);
//localStorage.setItem("student-info", JSON.stringify(result));
navigate('/manage/students');
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
            defaultValue={data.name}
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
  defaultValue={data.contact_no}
  onChange={(e)=>{setContact(e.target.value)}}
  />
</div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            defaultValue={data.email}
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
          <button type="submit" onClick={(e)=>updateHandler(e,data.id)}  className="btn btn-primary">
           Update
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