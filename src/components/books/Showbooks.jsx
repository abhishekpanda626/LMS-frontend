import React, { useState, useEffect } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import './teacher.css';
export default function Showbooks(){
const [data,setData]=useState([]);
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
console.log(data);
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
    <center><h1>Books</h1></center>
    </div>
<div className="container">
<table className="table table-hover m-md-5">
  <thead>
    <tr>
      <th scope="col">Book_id</th>
      <th scope="col">Title</th>
      <th scope="col">Author Name</th>
      <th scope="col" >Genre</th>
      <th scope="col" >Published Date</th>
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
     
    </tr>
    
  </tbody>
  ))}
  
</table>

</div>


</div>

        </>
    )
}