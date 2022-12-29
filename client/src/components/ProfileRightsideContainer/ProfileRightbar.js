import React, { useEffect, useState } from 'react'
import './ProfileRightbar.css'
import image1 from '../Images/nullclass.png'
import image2 from '../Images/combo.png'
import addFriends from '../Images/add-user.png'

import axios from 'axios'
import Follow from '../RightsideContainer/Follow'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'



const ProfileRightbar = () => {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  let location = useLocation();
  let id= location.pathname.split("/Website")[2];
  let idforsuggest = user?.other?._id;
  
const [Followinguser , setFollowinguser]=useState([]);
useEffect(() => {
  const getFollowing = async()=>{
    try {
      const res = await axios.get(`http://localhost:5000/api/post/followers/${id}`);
      setFollowinguser(res.data);
    } catch (error) {
      console.log("error")
    }
  }
  getFollowing();
  
}, [])
console.log(Followinguser)


const [users , setUsers]=useState([]);
useEffect(() => {
    const getuser = async ()=>{
        try {
            const res = await axios.get(`http://localhost:5000/api/user/all/user/${idforsuggest}`)
            setUsers(res.data);
            
        } catch (error) {
            console.log("some error occcured")
            
        }
    }
    getuser();
  
}, [])
console.log(users)
  return (
    <div className='Profilerightbar'>
      <div className='profilerightcontainer'>
      <h3>Followers</h3>
       <div>
        {Followinguser.map((item)=>(
          <div style={{marginTop:'10px'}}>
          <div style={{display:'flex',alignItems:'center', marginLeft:'10px',cursor:'pointer'}}>
          <img src={`${item.profile}`} className='Friendsimage' alt=''/>
          <p style={{textAlign:'start',marginLeft:'10px'}}>{item.username} </p>
          </div>
          </div>

        ))}
        
      
        
        
        
       
       </div>

      </div>


      <div className='rightcontainer2'>
        <h3 style={{textAlign:'start',marginLeft:'10px'}}>Suggested for you</h3>
        {users.map((item)=>(
          <Follow userdetails={item}/>
        ))}
      

      </div>

    </div>
  )
}

export default ProfileRightbar