import MyImage from './bg.jpg';
import React, { useState, useEffect } from 'react';
export default function About() {
const [books,setBooks]=useState([]);

useEffect( ()=>{
  fetch("http://127.0.0.1:8000/api/books/display")
        .then((res) =>
            res.json())

        .then((data) => {
            setBooks(data);
            console.log(books)
          
        },)
},[])
  return (
    <>
    <div className='container-fluid' style={
        {
            position:'relative',
        }
      }>
        <center> <h1       > <span style={{color:'#e52165'}}>Library</span>  <span style={{color:'#0d1137'}}>Portal</span></h1></center> 
      <img src={MyImage} alt="background-library" width={1270} height={500}  /> 
        <div style={
        {
            position:'absolute',
           // color:'white',
           
        }
      } >
       
        </div>
        <div className='row'>
        {/* {
          books.map((data)=><div style={{padding:'10px', BorderStyle:'groove' }} className="col-md-3 animated fadeIn " key={data.id}>
   
          <div className="card"  id="hideit">
              <center><h5 className='card-title card-text p-3 mb-2 bg-danger text-white'>Title:{data.title}</h5></center>
           
              <div className="avatar">
                <img
                  src={`http://localhost:8000/${data.file_path}`}
                  className="card-img-top"
                  alt=""
                  width={80}
                  height={200}
                />
                 <div className="card-text p-3 mb-2 bg-success text-white"> 
              <center><h5>
              Author:{data.author}
              </h5></center>
              </div>
              </div>
            
         
          </div>
        </div>
          )
        } */}
        </div>
</div>
</>
  );
}