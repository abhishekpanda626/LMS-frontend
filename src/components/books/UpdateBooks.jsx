import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function UpdateBooks()
{
    var id=localStorage.getItem('bid');
    const[data,setData]=useState([]);
    const [title,setTitle]=useState('');
const [author,setAuthor]=useState('');
const [genre,setGenre]=useState('');
const [pdate,setPdate]=useState('');
const [file,setFile]=useState([]);
const navigate=useNavigate();
//let data={title,author,genre,pdate,file};
function fetchdata()
{
    fetch("http://127.0.0.1:8000/api/books/"+id)
    .then((res) =>
        res.json())

    .then((data) => {
        console.log(data);
        setData(data);
        setTitle(data.title);
        setAuthor(data.author);
        setGenre(data.genre);
        setPdate(data.published_date);
        setFile(data.file_path);
       
    },)
}
useEffect(()=>{
     fetchdata();
},[])
async function updateHandler(e,bid){
e.preventDefault();

//console.warn(data);
const formdata= new FormData();
formdata.append('title',title);
formdata.append('author',author);
formdata.append('genre',genre);
formdata.append('published_date',pdate);
formdata.append('image',file);
console.log(formdata);
let result=await fetch("http://localhost:8000/api/books/update/"+bid+"?_method=PUT",{
    method:'POST',
  body:formdata});
navigate('/books/manage');
}








    return(
        <>
        <div className="container" style={{backgroundColor: "#2779e2"}}>
        
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-8">
        <h1 className="text-white m-4">Update Book</h1>
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
                  defaultValue={data.title}
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
                defaultValue={data.author}
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
              defaultValue={data.genre}
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
              defaultValue={data.published_date}
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
                defaultValue={data.file_path}
                onChange={(e)=>setFile(e.target.files[0])}
                /> <br />
               <img style={{width:50}} src={"http://localhost:8000/"+data.file_path}/>
                <div className="small text-muted mt-2">Upload  cover page of the book in jpg/png/jpeg format. Max file
                  size 50 MB</div>

              </div>
            </div>

            <hr className="mx-n3"/>

            <div >
              <button type="button" className="btn btn-primary btn-lg" onClick={(e)=>updateHandler(e,data.id)}>Update</button>
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