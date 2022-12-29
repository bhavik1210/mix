import React, { useEffect, useState } from 'react'
import './Post.css'
import ProfileImage from '../Images/Profile.png'
import LikeIcon from '../Images/like.png'
import CommentIcon from '../Images/speech-bubble.png'
import ShareIcon from '../Images/share.png'
import MoreOption from '../Images/more.png'
import anotherlikeicon from '../Images/setLike.png'
import axios from 'axios'

const Post = ({detail}) => {
  console.log(detail)
    const [count ,setCount]=useState(0);
    const [Comments , setComments]=useState([]);
    const [commentwriting, setcommentwriting]=useState('');
    const [show, setshow]=useState(false);

    const [user ,setuser]=useState([]);
    useEffect(() => {
        const getuser = async ()=>{
            try {
                const res = await axios.get(`http://localhost:5000/api/user/post/user/details/${detail.user}`)
                setuser(res.data);
                
            } catch (error) {
                console.log("some error occcured")
                
            }
        }
        getuser();
      
    }, [])
    console.log(user)
   
    


    const handleLike=async()=>{

        // if (Like == LikeIcon){
        //      await fetch(`http://localhost:5000/api/post/${post._id}/like`, {method:"PUT" ,headers:{'Content-Type':"application/Json",token:accesstoken}})
        //     setLike(anotherlikeicon);
        //     setCount(count +1);

        // }else{
        //     await fetch(`http://localhost:5000/api/post/${post._id}/like`, {method:"PUT" ,headers:{'Content-Type':"application/Json",token:accesstoken}})
        //     setLike(LikeIcon)
        //     setCount(count -1);
        // }
    }


    const addComment=()=>{
        const comment ={
            "id":"hkj387",
            "username":"Bhavik",
            "title":`${commentwriting}`
        }
        setComments(Comments.concat(comment));
    }

    const handleComment =()=>{
        addComment()
    }
    console.log(Comments)


    const handleshow=()=>{
        if(show === false){
            setshow(true)
        }else{
            setshow(false)
        }
    }


  return (
    <div className='PostContainer'>
        <div className='SubPostContainer'>
            <div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={`${user.profile}`} className='PostImage' alt=''/> 
                
                <div>
                <p style={{marginLeft:'5px', textAlign:'start'}}>{user.username}</p>
                <p style={{fontSize:'11px', textAlign:'start',marginLeft:'5px',marginTop:'-13px',color:'#aaa'}}>Following by Bhavik</p>

                </div>
                
                <img src={`${MoreOption}`} className='moreicons' alt=''/>

            </div>
            <p style={{textAlign:'start', width:'92%',marginLeft:'10px',marginTop:'0px'}}>
            {detail.title} </p>
                <img src={`${detail.image}`} className='PostImages' alt=''/>

                <div style={{display:'flex'}}>
                    <div style={{display:'flex',marginLeft:'10px'}}>
                    <div style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
                    {/* <img src={`${Like}`} className='iconsforpost' onClick={handleLike} alt=''/> */}
                    <p style={{marginLeft:'5px'}}>{detail.like.length} Likes</p>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginLeft:'20px',cursor:'pointer'}}>
                    <img src={`${CommentIcon}`} className='iconsforpost' onClick={handleshow} alt=''/>
                    <p style={{marginLeft:'5px'}}>{detail.comments.length} Comments</p>
                    </div>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginLeft:'60px',cursor:'pointer'}}>
                    <img src={`${ShareIcon}`} className='iconsforpost' alt=''/>
                    <p style={{marginLeft:'5px'}}>Share</p>
                    </div>
                </div>

            </div>
            {show === true ? 
            <div style={{padding:'10px'}} >
            <div style={{display:'flex',alignItems:'center'}}>
            <img src={`${ProfileImage}`} className='PostImage' alt=''/> 
            <input type="text" className='commentinput' placeholder='write your comment' onChange={(e)=>setcommentwriting(e.target.value)}/>
            <button className='addcommentbtn' onClick={handleComment}>Add Comment</button>

            </div>
            {Comments.map((item)=>(
                 <div style={{alignItems:'center'}}>

                    <div style={{display:'flex',alignItems:'center'}} >
                 <img src={`${ProfileImage}`} className='PostImage' alt=''/>
                 <p style={{marginLeft:'6px',fontSize:'15px',marginTop:'6px'}}>{item.username}</p>
                 </div>
                 <p style={{marginLeft:'55px',textAlign:'start', marginTop:'-16px'}}>{item.title}</p>
                 <p style={{marginLeft:'55px',textAlign:'start', marginTop:'-10px', color:'#aaa',fontSize:'11px'}}>reply</p>

                
                 </div>

            ))}
                 </div>:''
            }
            

           
             
        </div>

    </div>
  )
}

export default Post