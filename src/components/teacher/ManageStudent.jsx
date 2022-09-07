import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import './teacher.sass';
export default function Manage(){
const [data,setData]=useState([]);
const navigate=useNavigate();
function fetchuser()
{
  fetch("http://127.0.0.1:8000/api/users")
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
async function deleteHandler(id){
   await fetch("http://localhost:8000/api/users/delete/"+id,{method:'DELETE'});
  fetchuser();
  }

const updateHandler=(id)=>{
  localStorage.setItem('sid',id);
  navigate('update');
}

const addHandler=()=>{
  navigate('/student/signup');
}
    return (
        <>
        {/* <div className="container">
    <div className="panel panel-default">
      
        <div className="panel-body">
            <table className="table-latitude">
                 <caption>Employee Information</caption>
                  <thead>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>E-mail</th>
                </thead>
         
                <tbody>

                    <tr>
                        <td>A</td>
                        <td>B</td>
                        <td>C</td>
                        </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>  */}



<div className="container">
<div className='container' >
<span style={{marginTop:'60px',marginLeft:'400px',font:'60px bold sans-serif ',color:"yellowgreen"}}  >STUDENTS</span>
    <button className='btn btn-primary' onClick={(e)=>addHandler(e)}  style={{ marginTop:'30px',marginLeft:'900px'}}>
      Add new 
    </button>
  </div>
<table className="table table-hover m-md-5">
  <thead >
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Contact No</th>
      <th scope="col">Email</th>
      <th scope="col" >Action</th>
    </tr>
  </thead>
  {data&&data.map(user=>(
    <tbody key={user.id}>
    <tr>
    <th scope="row"  >
        <img  src={`http://localhost:8000/${user.file_path}`} alt="image not found" width={80}/>
      
        </th>
      <td>{user.name}</td>
      <td>{user.contact_no}</td>
      <td>{user.email}</td>
      <td>
      <button className='btn btn-info' onClick={(e)=>updateHandler(user.id)}>Update</button> &emsp;
        <button className='btn btn-danger' onClick={(e)=>deleteHandler(user.id)}>Remove</button>
      </td>
     
    </tr>
    
  </tbody>
  ))}
  
</table>

</div>

        </>
    )
}