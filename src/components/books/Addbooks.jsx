import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function Addbooks()
{
const [title,setTitle]=useState('');
const [author,setAuthor]=useState('');
const [genre,setGenre]=useState('');
const [pdate,setPdate]=useState('');
const [file,setFile]=useState([]);
const navigate=useNavigate();
//let data={title,author,genre,pdate,file};

async function addHandler(e){
e.preventDefault();
//console.warn(data);
const formdata= new FormData();
formdata.append('title',title);
formdata.append('author',author);
formdata.append('genre',genre);
formdata.append('published_date',pdate);
formdata.append('image',file);
//console.log(formdata);
let result=await fetch("http://localhost:8000/api/books/add",{
    method:'POST',
  body:formdata});
  
 
  if(result.status===200)
  {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Student has been Updated',
      showConfirmButton: false,
      timer: 1500
    })
    navigate('/books/manage');
}


}


    return(
        <>
        <div className="container" style={{backgroundColor: "#2779e2"}}>
        
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-8">

        <h1 className="text-white m-4">Add a new Book</h1>

        <div className="card" style={{borderRadius: "15px"}}>
          <div className="card-body">

            <div className="row align-items-center pt-3 pb-1">
              <div className="col-md-3 ps-5">

                <h6 className="mb-0">Title</h6>

              </div>
              <div className="col-md-9 pe-5">

                <input 
                type="text"
                 placeholder="book title"
                  className="form-control form-control-lg"
                  onChange={(e)=>setTitle(e.target.value)}
                  />

              </div>
            </div>

            <hr className="mx-n3"/>

            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-5">

                <h6 className="mb-0">Author</h6>

              </div>
              <div className="col-md-9 pe-5">

                <input type="text" className="form-control form-control-lg" placeholder="author name"
                onChange={(e)=>setAuthor(e.target.value)}
                
                />

              </div>
            </div>
            <hr className="mx-n3"/>

            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-5">

                <h6 className="mb-0">Genre</h6>

              </div>
              <div className="col-md-9 pe-5">

              <input type="text" className="form-control form-control-lg" placeholder="Genre of the book"
              onChange={(e)=>setGenre(e.target.value)}
              />

              </div>
            </div>
            <hr className="mx-n3"/>


            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-5">

                <h6 className="mb-0">Published date:</h6>

              </div>
              <div className="col-md-9 pe-5">

              <input type="date" className="form-control form-control-lg" placeholder="Date of publish" 
              onChange={(e)=>setPdate(e.target.value)}
              />

              </div>
            </div>

            <hr className="mx-n3"/>

            <div className="row align-items-center py-1">
              <div className="col-md-3 ps-5">

                <h6 className="mb-1">Upload Cover page</h6>

              </div>
              <div className="col-md-9 pe-5">

                <input className="form-control form-control-lg" id="formFileLg" type="file" 
                onChange={(e)=>setFile(e.target.files[0])}
                />
                <div className="small text-muted mt-2">Upload  cover page of the book in jpg/png/jpeg format. Max file
                  size 50 MB</div>

              </div>
            </div>

            <hr className="mx-n3"/>

            <div >
              <button type="button" className="btn btn-primary btn-lg" onClick={(e)=>addHandler(e)}>Add book</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

        </div>
    
        </>
        
    )
}