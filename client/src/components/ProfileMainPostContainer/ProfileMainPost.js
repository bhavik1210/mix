import React, { useEffect, useState } from 'react'
import './ProfileMainPost.css'
import ContentPost from '../ContentPostcontainer/ContentPost'
import Coverimage from '../Images/Profile.png'
import Post from '../ProfilePostContainer/Post'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const ProfileMainPost = () => {
  const [post , setPost]=useState([]);
  let location = useLocation();
  let id= location.pathname.split("/Website")[2];
  
    
  useEffect(() => {
    const getPost=async()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/post/get/post/${id}`)
        setPost(res.data);
        
      } catch (error) {
        console.log("error Occured")
        
      }
    }
    getPost();
  }, [])
  
  return (
    <div className='ProfilemainPostContainer'>
      <div>
        <img src={`${Coverimage}`} className='profileCoverimage' alt=''/>
        <h2 style= {{marginTop:'-43px',color:'white',textAlign:'start',marginLeft:'35px'}}>Your Profile</h2>
      </div>
      <ContentPost/>
      {post.map((item)=>(
        <Post detail={item}/>

      ))}
      
      
    </div>
  )
}

export default ProfileMainPost