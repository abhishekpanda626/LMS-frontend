import React, { useState, useEffect } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import './teacher.sass';
export default function Manage(){
const [data,setData]=useState([]);
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


 <div className="container ">
    <div className="container">
    <center><h1>Students</h1></center>
    </div>
<div className="container">
<table className="table table-hover m-md-5">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col" >Action</th>
    </tr>
  </thead>
  {data&&data.map(user=>(
    <tbody key={user.id}>
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className='btn btn-danger' onClick={(e)=>deleteHandler(user.id)}>Remove</button>
      </td>
     
    </tr>
    
  </tbody>
  ))}
  
</table>

</div>


</div> 

        </>
    )
}