import React, { useEffect, useState } from 'react'
import './ProfileLeftbar.css'
import image from '../Images/Profile.png'
import image1 from '../Images/image1.jpg'
import image2 from '../Images/image2.jpg'

import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'



const ProfileLeftbar = () => {
  let location = useLocation();
   let id= location.pathname.split("/Website")[2];
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  const [Follow ,setUnFollow] = useState([user.other.Following.includes(id) ?  "Unfollow" :"Follow"]);
  const accessToken = user.accessToken;
  console.log(accessToken)
  // const id = user.other._id;
  let username = user?.other?.username;
  


  const [users ,setuser]=useState([]);
  useEffect(() => {
      const getuser = async ()=>{
          try {
              const res = await axios.get(`http://localhost:5000/api/user/post/user/details/${id}`)
              setuser(res.data);
              
          } catch (error) {
              console.log("some error occcured")
              
          }
      }
      getuser();
    
  }, [])
  let followersCounter = users?.Followers?.length;
  let followingCounter = users?.Following?.length;
  console.log(users)


const [Followinguser , setFollowinguser]=useState([]);
useEffect(() => {
  const getFollowing = async()=>{
    try {
      const res = await axios.get(`http://localhost:5000/api/post/following/${id}`);
      setFollowinguser(res.data);
    } catch (error) {
      console.log("error")
    }
  }
  getFollowing();
  
}, [])
const handleFollow =async()=>{
  if(Follow === "Follow"){
    await fetch(`http://localhost:5000/api/user/following/${id}`,{method:'PUT',headers:{'Content-Type':"application/JSON",token:accessToken},body:JSON.stringify({user:`${user.other._id}`})})
    setUnFollow("UnFollow")

  }else{
    await fetch(`http://localhost:5000/api/user/following/${id}`,{method:'PUT',headers:{'Content-Type':"application/JSON",token:accessToken},body:JSON.stringify({user:`${user.other._id}`})})
    setUnFollow("Follow")
  }
 
}

console.log(Followinguser)


  return (
    <div className='Profileleftbar'>
      <div className='NotificationsContainer'>
      <img src={`${image}`}  className='ProfilepageCover' alt=''/>
        <div style={{display:'flex' , alignItems:'center',marginTop:-30}}>
          <img src={`${users.profile}`}  className='ProfilepageImage' alt=''/>
          <div>
          <p style={{marginLeft:6,marginTop:20,color:'black',textAlign:'start'}}>{users.username}</p>
          <p style={{marginLeft:6,marginTop:20,color:'black',textAlign:'start', marginTop:'-16px',fontSize:'11px'}}>FullStack Developer</p>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <p style={{color:'black' ,marginLeft:'20px' , fontSize:'14px'}}>Followings</p>
          <p style={{color:'black', marginRight:'20px', fontSize:'12px' ,marginTop:17}}>{followingCounter}</p>

        </div>
        <hr style={{marginTop:'-10px'}}/>
        <div style={{display:'flex', justifyContent:'space-between', marginTop:'-20px'}}>
          <p style={{color:'black' ,marginLeft:'20px' , fontSize:'14px'}}>Followers</p>
          <p style={{color:'black', marginRight:'20px', fontSize:'12px' ,marginTop:17}}>{followersCounter}</p>

        </div>
        <hr style={{marginTop:'-10px'}}/>
        <div style={{marginTop:'-20px'}}>
          <h5 style={{color:'black' ,marginLeft:'20px' , fontSize:'14px',marginRight:"20px",textAlign:'center',marginTop:"30px"}}>User Bio</h5>
          <p style={{color:'black',  fontSize:'12px' ,marginTop:'-20px',textAlign:'start',marginLeft:'10px'}}>i m a  full stack Developer with mern technology and also some features of Bug </p>

        </div>
        
        {user.other._id !== id ? <div onClick={handleFollow}><button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"green" , color:"white"}}>{Follow}</button></div> : <div><button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"green" , color:"white"}}>Edit Bio</button></div> }
        
     
     
      </div>



      <div className='NotificationsContainer'>
        <h3>Following </h3>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <p style={{marginLeft:'10px'}}>Friends</p>
          <p style={{marginRight:'10px',color:'#aaa'}}>see all</p>
        </div>


        <div style={{display:'flex' ,flexWrap:'wrap',marginLeft:'5px'}}>
          {Followinguser.map((item)=>(
            <Link to={`/Profile/${item._id}`}>
            <div style={{marginLeft:'4px',cursor:'pointer'}} key={item._id}>
            <img src={`${item.profile}`} className='friendimage' alt=''/>
            <p style={{marginTop:'-2px'}}>{item.username} </p>
            </div>
            </Link>

          ))}
        
          
        </div>
    
      
      </div>

    </div>
  )
}

export default ProfileLeftbar