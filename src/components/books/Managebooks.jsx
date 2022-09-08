import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import './teacher.css';
export default function Managebooks(){
const [data,setData]=useState([]);
const navigate=useNavigate();
function fetchdata()
{
    fetch("http://127.0.0.1:8000/api/books/display")
    .then((res) =>
        res.json())

    .then((data) => {
        console.log(data);

        setData(data);
      
    },)
}
useEffect( ()=>{
   fetchdata();
},[])
async function deleteHandler(e,id){
e.preventDefault();
 await fetch("http://localhost:8000/api/books/delete/"+id,{method:'DELETE'});
fetchdata();
}
const addHandler=()=>{
    navigate('/books/add');
}
const editHandler=(id)=>{
localStorage.setItem('bid',id);
navigate('/books/update');
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
    <div className='container' >
<span style={{marginTop:'60px',marginLeft:'400px',font:'60px bold sans-serif ',color:"yellowgreen"}}  >BOOKS</span>
    <button className='btn btn-primary' onClick={(e)=>addHandler(e)}  style={{ marginTop:'30px',marginLeft:'900px'}}>
      Add new book
    </button>
  </div>

    </div>
<div className="container">
<table className="table table-hover m-md-5">
  <thead>
    <tr>
      <th scope="col">Cover Page</th>
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
      <th scope="row"  >
        <img  src={`http://localhost:8000/${book.file_path}`} alt="image not found" width={80}/>
        
        </th>
      <th>{book.title}</th>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.published_date}</td>
      <td> <button className="btn btn-info" onClick={(e)=>editHandler(book.id)} >Edit</button> </td>
      <td> <button className="btn btn-danger" onClick={(e)=>deleteHandler(e,book.id)}>Delete</button> </td>
     
    </tr>
    
  </tbody>
  ))}
  
</table>
</div>


</div>

        </>
    )
}