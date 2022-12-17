import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import M from "materialize-css";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const history=useNavigate();
  const [name,setName]=useState("");
  const [location,setLocation]=useState("");
  const [description,setDescription]=useState("");
  const [image,setImage]=useState("");
  const [url,setUrl]=useState("");

  useEffect(()=>{
    if(url){
      fetch('https://instaclone-miniproject-server.onrender.com/createPost',{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          location,
          description,
          PostImage:url
        })
      }).then(res=>res.json())
      .then(data=>{
        if(data.error){
          M.toast({html:data.error,classes:"#c62828 red darken-3"});
        }else{
          M.toast({html:"Created Post Successfully",classes:"#43a047 green darken-1"});
          history('/post');
        }
      }).catch(err=>{
        console.log(err);
      });
    }
  },[url]);

  const postDetails=()=>{
    const data = new FormData();
    data.append("file",image);
    data.append("upload_preset","insta-clone");
    data.append("cloud_name","dhauuuwoi");

    fetch("https://api.cloudinary.com/v1_1/dhauuuwoi/image/upload",{
      method:"post",
      body:data
    }).then(res=>res.json())
    .then(data=>{
      setUrl(data.url);
    }).catch(err=>{
      console.log(err);
    });

  }

  return (
    <>
        <Navbar/>
        <div className="card input-field" style={{
        margin:"30px auto",
        maxWidth:"500px",
        padding:"20px",
        textAlign:"center"
    }}>
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1 right">
          <span>Browse</span>
          <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" placeholder="No file chosen"/>
        </div>
      </div>
      <input type="text" style={{maxWidth:"45%"}} value={name} onChange={(e)=>setName(e.target.value)} placeholder="Author" />
      <input type="text" style={{maxWidth:"45%",marginLeft:"20px"}} value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Location" />
      <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
      <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>postDetails()}>Post</button>
    </div>
    </>
    
  );
}

export default CreatePost;