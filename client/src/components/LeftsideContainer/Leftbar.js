import React, { useEffect, useState } from 'react'
import './Leftbar.css'
import image from '../Images/Profile.png'
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'
import image3 from '../Images/image3.jpg'
import image4 from '../Images/image4.jpg'
import image5 from '../Images/image5.jpg'
import image6 from '../Images/image6.jpg'
import axios from 'axios'
import { useSelector } from 'react-redux'



const Leftbar = () => {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user
  console.log(userDetails)
  let id = user?.other?._id;

  const accessToken= user?.accessToken;
  console.log(accessToken)
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
    <div className='Leftbar'>
      <div className='NotificationsContainer'>
      <div style={{display:'flex' , justifyContent:'space-around'}}>
        <p style={{marginLeft:'-14px'}}>Notifications </p>
        <p style={{color:"#aaa",marginLeft:'-14px'}}>See all</p>

      </div>
      <div style={{display:'flex' , alignItems:"center",marginTop:-10}}>
        <img src={`${image}`}  className='notificationimg' alt=''/>
        <p style={{marginLeft:"5px" , color:'#aaa', fontSize:'13', textAlign:'start', width:'120px'}}>Bhavik Likes your post</p>
        <img src={`${image}`} className='likeimage' alt=''/>

      </div>
      <div style={{display:'flex' , alignItems:"center",marginTop:-10}}>
        <img src={`${image}`}  className='notificationimg' alt=''/>
        <p style={{marginLeft:"5px" , color:'#aaa', fontSize:'13', textAlign:'start', width:'120px'}}>Bhavik started Following You</p>
        <img src={`${image1}`} className='followinguserimage' alt=''/>

      </div>
      <div style={{display:'flex' , alignItems:"center",marginTop:-10}}>
        <img src={`${image}`}  className='notificationimg' alt=''/>
        <p style={{marginLeft:"5px" , color:'#aaa', fontSize:'13', textAlign:'start', width:'120px'}}>Bhavik Likes your post</p>
        <img src={`${image2}`} className='likeimage' alt=''/>

      </div>
      <div style={{display:'flex' , alignItems:"center",marginTop:-10}}>
        <img src={`${image}`}  className='notificationimg' alt=''/>
        <p style={{marginLeft:"5px" , color:'#aaa', fontSize:'13', textAlign:'start', width:'120px'}}>Bhavik started Following You</p>
        <img src={`${image3}`} className='followinguserimage' alt=''/>

      </div>
      <div style={{display:'flex' , alignItems:"center",marginTop:-10}}>
        <img src={`${image}`}  className='notificationimg' alt=''/>
        <p style={{marginLeft:"5px" , color:'#aaa', fontSize:'13', textAlign:'start', width:'120px'}}>Bhavik started Following You</p>
        <img src={`${image4}`} className='followinguserimage' alt=''/>

      </div>
      <div style={{display:'flex' , alignItems:"center",marginTop:-10}}>
        <img src={`${image}`}  className='notificationimg' alt=''/>
        <p style={{marginLeft:"5px" , color:'#aaa', fontSize:'13', textAlign:'start', width:'120px'}}>Bhavik Likes your post</p>
        <img src={`${image5}`} className='likeimage' alt=''/>

      </div>
      </div>



      <div className='NotificationsContainer'>
      <div style={{display:'flex' , justifyContent:'space-around'}}>
        <p style={{marginLeft:'-20px'}}>Explore </p>
        <p style={{color:"#aaa",marginLeft:'40px'}}>See all</p>

      </div>
      <div>
        {post.map((item)=>(
          [
            item.image === '' ? '' :
            <img src={`${item.image}`} className='exploreimage' alt=''/>
          ]

            

        ))}
      


      </div>
      
      </div>

    </div>
  )
}

export default Leftbar