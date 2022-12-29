import React, { useEffect, useState } from 'react'
import './Post.css'
import ProfileImage from '../Images/Profile.png'
import LikeIcon from '../Images/like.png'
import CommentIcon from '../Images/speech-bubble.png'
import ShareIcon from '../Images/share.png'
import MoreOption from '../Images/more.png'
import anotherlikeicon from '../Images/setLike.png'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Post = ({post}) => {

    const [user ,setuser]=useState([]);
    useEffect(() => {
        const getuser = async ()=>{
            try {
                const res = await axios.get(`http://localhost:5000/api/user/post/user/details/${post.user}`)
                setuser(res.data);
                
            } catch (error) {
                console.log("some error occcured")
                
            }
        }
        getuser();
      
    }, [])


    const userDetails = useSelector((state)=>state.user);
    let users = userDetails?.user
    console.log(userDetails)

    const userId =users.other._id;
    const accessToken =users.accessToken;

    const [Like , setLike]=useState([post.like.includes(userId) ? anotherlikeicon : LikeIcon]);
    const [count ,setCount]=useState(post.like.length);
    const [Comments , setComments]=useState(post.comments);
    const [commentwriting, setcommentwriting]=useState('');
    const [show, setshow]=useState(false);
   
    

    const handleLike = async() => {
        if (Like == LikeIcon) {
          await fetch(`http://localhost:5000/api/post/${post._id}/like` , {method:"PUT" , headers:{'Content-Type':"application/JSON" , token:accessToken}})
          setLike(anotherlikeicon);
          setCount(count + 1);
        } else {
          await fetch(`http://localhost:5000/api/post/${post._id}/like` , {method:"PUT" , headers:{'Content-Type':"application/JSON" , token:accessToken}})
          setLike(LikeIcon)
          setCount(count - 1);
        }
      }
    

    const addComment=async()=>{
        const comment ={
            "postid":`${post._id}`,
            "username":`${users.other.username}`,
            "comment":`${commentwriting}`,
            "profile":`${users.other?.profile}`
        }
        await fetch(`http://localhost:5000/api/post/comment/post`, {method:"PUT" ,headers:{'Content-Type':"application/JSON",token:accessToken}, body:JSON.stringify(comment)})
        setComments(Comments.concat(comment));
        
            
    }

    const handleComment =()=>{
        addComment();
    }
    console.log(Comments)


    const handleshow=()=>{
        if(show === false){
            setshow(true)
        }else{
            setshow(false)
        }
    }
console.log(user)

  return (
    <div className='PostContainer'>
        <div className='SubPostContainer'>
            <div>
                <div style={{display:'flex', alignItems:'center'}}>
                    {user.profile == ""? <img src={`${ProfileImage}`} className='PostImage' alt=''/> : <img src={`${user.profile}`} className='PostImage' alt=''/>}
                
                <div>
                <p style={{marginLeft:'5px', textAlign:'start'}}>{user.username}</p>
                <p style={{fontSize:'11px', textAlign:'start',marginLeft:'5px',marginTop:'-13px',color:'#aaa'}}>Following by Bhavik</p>

                </div>
                
                <img src={`${MoreOption}`} className='moreicons' alt=''/>

            </div>
            <p style={{textAlign:'start', width:'92%',marginLeft:'10px',marginTop:'0px'}}>
            {post.title} </p>
            {post.image !== '' ? 
            <img src={`${post.image}`} className='PostImages' alt=''/> : post.video !== ''? <video className='PostImages' width="380" height="500" controls >
                <source src={`${post.video}`} type="video/mp4"/>
            </video>: ''
        }
                

                <div style={{display:'flex'}}>
                    <div style={{display:'flex',marginLeft:'10px'}}>
                    <div style={{display:'flex',alignItems:'center',cursor:'pointer'}}>
                    <img src={`${Like}`} className='iconsforpost' onClick={handleLike} alt=''/>
                    <p style={{marginLeft:'5px'}}>{count} Likes</p>
                    </div>
                    <div style={{display:'flex',alignItems:'center',marginLeft:'20px',cursor:'pointer'}}>
                    <img src={`${CommentIcon}`} className='iconsforpost' onClick={handleshow} alt=''/>
                    <p style={{marginLeft:'5px'}}>{Comments.length} Comments</p>
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
            <img src={`${users.other.profile}`} className='PostImage' alt=''/> 
            <input type="text" className='commentinput' placeholder='write your comment' onChange={(e)=>setcommentwriting(e.target.value)}/>
            <button className='addcommentbtn' onClick={handleComment}>Add Comment</button>

            </div>
            {Comments.map((item)=>(
                 <div style={{alignItems:'center'}}>

                    <div style={{display:'flex',alignItems:'center'}} >
                 <img src={`${item.profile}`} className='PostImage' alt=''/>
                 <p style={{marginLeft:'6px',fontSize:'15px',marginTop:'6px'}}>{item.username}</p>
                 </div>
                 <p style={{marginLeft:'55px',textAlign:'start', marginTop:'-16px'}}>{item.comment}</p>
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