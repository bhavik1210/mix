import React, { useEffect, useState } from 'react'
import './Rightbar.css'
import image1 from '../Images/nullclass.png'
import image2 from '../Images/combo.png'
import addFriends from '../Images/add-user.png'

import axios from 'axios'
import Follow from './Follow'
import { useSelector } from 'react-redux'



const Rightbar = () => {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user;
  const id = user?.other?._id;

const [users , setusers]=useState([])

useEffect(() => {
    const getuser = async ()=>{
        try {
            const res = await axios.get(`http://localhost:5000/api/user/all/user/${id}` )
            setusers(res.data);
            
        } catch (error) {
            console.log("some error occcured")
            
        }
    }
    getuser();
  
}, [])
console.log(users)
  return (
    <div className='Rightbar'>
      <div className='rightcontainer'>
      
        <div className='adsContainer'>
          <img src={`${image1}`} className='adsimg' alt=''/>
          <div>
            <p style={{textAlign:'start',marginLeft:'10px', marginTop:'-20px'}}>Nullclass</p>
            <p style={{textAlign:'start',marginLeft:'10px',fontSize:'10px', marginTop:'-16px'}}>Buy Nullclass Course </p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={`${image2}`} className='adsimg' alt=''/>
          <div>
            <p style={{textAlign:'start',marginLeft:'10px', marginTop:'-20px'}}>Nullclass</p>
            <p style={{textAlign:'start',marginLeft:'10px',fontSize:'10px', marginTop:'-16px'}}>Buy Nullclass Course </p>
          </div>
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

export default Rightbar