import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import './teacher.css';
export default function Managebooks(){
const [data,setData]=useState([]);
const navigate=useNavigate();
useEffect( ()=>{
    fetch("http://127.0.0.1:8000/api/books/display")
          .then((res) =>
              res.json())

          .then((data) => {
              //console.log(data);
              setData(data);
             // setPosts(data)
          },)
},[])

const addHandler=()=>{
    navigate('books/add');
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
</div> */}


<div className="container ">
    <div className="container">
    <center><h1>Books</h1>
    </center>
    </div>
<div className="container">
<table className="table table-hover m-md-5">
  <thead>
    <tr>
      <th scope="col">Book_id</th>
      <th scope="col">Title</th>
      <th scope="col">Author Name</th>
      <th scope="col" >Genre</th>
      <th scope="col">Published Date</th>
      <th scope="col" colSpan={2} >Action</th>
    </tr>
  </thead>
  {data&&data.map(book=>(
    <tbody key={book.id}>
    <tr>
      <th scope="row">{book.id}</th>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.published_date}</td>
      <td> <button className="btn btn-info">Edit</button> </td>
      <td> <button className="btn btn-danger">Delete</button> </td>
     
    </tr>
    
  </tbody>
  ))}
  
</table>
<center><button className='btn btn-primary' onClick={(e)=>addHandler(e)} >Add new</button></center>
</div>


</div>

        </>
    )
}