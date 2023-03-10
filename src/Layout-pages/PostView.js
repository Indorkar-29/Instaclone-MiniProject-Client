import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const PostView = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{
    fetch('https://instaclone-miniproject-server.onrender.com/getPosts')
    .then(res=>res.json())
    .then(result=>{
      setData(result);
    })
  },[]);

  return (
    <div className="posts">
      <Navbar/>
      {
        data.map(item=>{
          return(
            <div className="card posts-card" key={item._id}>
              <i className="material-icons" style={{float:"right",paddingRight:"20px",paddingTop:"25px"}}>more_horiz</i>
              <h5 style={{paddingTop:"15px",paddingLeft:"15px",margin:"auto"}}><strong>{item.name}</strong></h5>
              <h6 style={{paddingLeft:"15px",margin:"auto",paddingBottom:"10px"}}>{item.location}</h6>
              <div className="card-image">
                <img
                  src={item.PostImage}
                  alt="img"
                />
              </div>
              <div className="card-content">
              <h6 style={{float:"right",margin:"auto"}}>{item.date}</h6>
              <i className="material-icons">favorite_border</i>
              <i className="material-icons" style={{marginLeft:"15px"}}>send</i>
                <h6 style={{margin:"auto",paddingLeft:"5px"}}>{item.likes} likes</h6> 
                <h6 style={{paddingLeft:"5px"}}><strong>{item.description}</strong></h6>
              </div>
            </div>
          )
        }).reverse()
      }
      
    </div>
  );
};

export default PostView;
