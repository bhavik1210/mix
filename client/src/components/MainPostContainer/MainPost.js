import React, { useEffect, useState } from 'react'
import './MainPost.css'
import ContentPost from '../ContentPostcontainer/ContentPost'
import Post from '../PostContainer/Post'
import axios from 'axios'
import { useSelector } from 'react-redux'

const MainPost = () => {

  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  console.log(userDetails)
  let id = user?.other?._id;

  const accessToken= user?.accessToken;
  console.log(accessToken)
  //const accesstoken= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTYwN2RjMzJkMzJmNDcyZGI3Y2MxYiIsInVzZXJuYW1lIjoiQmhhdmlrIiwiaWF0IjoxNjcxODI1NzI1fQ.UWgyRGSvFDT0FPn4-Sg3ZZ-z5NYuW0i4wUCOJRrQ_QE";
  const [post , setPost]= useState([]);
  useEffect(()=>{
    const getPost = async()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/user/flw/${id}`,{
          headers:{
            token:accessToken
          }
        })
        setPost(res.data)
        
      } catch (error) {
        
      }
    }
    getPost();

  },[])
  console.log(post);
  return (
    <div className='mainPostContainer'>
      <ContentPost/>
      {post.map((item)=>(

          <Post post={item}/>
 
      ))}
      
    </div>
  )
}

export default MainPost