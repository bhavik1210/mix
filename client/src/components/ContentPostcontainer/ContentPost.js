import React, { useState } from 'react'
import './ContentPost.css'
import Profileimage from '../Images/Profile.png'
import imageIcon from '../Images/gallery.png'
import emojiIcon from '../Images/cat-face.png'
import VideoIcon from '../Images/video.png'
import { useSelector } from 'react-redux'
import app from '../../firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const ContentPost = () => {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user
  console.log(userDetails)
  let id = user?.other?._id;

  const [file , setFile]=useState(null);
  const [file2, setFile2]=useState(null);
  const [title , setTitle]= useState('');
  const [imagePre, setImagePre]= useState(null);
  const [VideoPre , setVideoPre]= useState(null);
  console.log(file?.name)
  const accessToken = user?.accessToken;


  const handlePost = (e)=>{
    e.preventDefault();
    if(file !== null){

    
    const fileName = new Date().getTime() + file?.name;
    const storage =getStorage(app);
    const StorageRef = ref(storage , fileName);

const uploadTask = uploadBytesResumable(StorageRef, file);
    uploadTask.on('state_changed', 
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // Handle unsuccessful uploads
    }, 
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        fetch(`http://localhost:5000/api/post/user/post` , {method:"POST" , headers:{'Content-Type':"application/JSON",token:accessToken},body:JSON.stringify({title:title, image:downloadURL ,video: ''})}).then((data)=>{
          alert("Your Post was uploaded Successfully");
          window.location.reload(true)
        })
    
      });
    }
  );}
  else if(file2 !== null){

 
    const fileName = new Date().getTime() + file2?.name;
    const storage =getStorage(app);
    const StorageRef = ref(storage , fileName);

const uploadTask = uploadBytesResumable(StorageRef, file2);
    uploadTask.on('state_changed', 
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      // Handle unsuccessful uploads
    }, 
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        fetch(`http://localhost:5000/api/post/user/post` , {method:"POST" , headers:{'Content-Type':"application/JSON",token:accessToken},body:JSON.stringify({title:title, video:downloadURL, image: ''})}).then((data)=>{
          alert("Your Post was uploaded Successfully");
          window.location.reload(true)
        })
    
      });
    }
  );


  }else{
    fetch(`http://localhost:5000/api/post/user/post` , {method:"POST" , headers:{'Content-Type':"application/JSON",token:accessToken},body:JSON.stringify({title:title , video: '' , image : ''})}).then((data)=>{
      alert("Your Post was uploaded Successfully");
      window.location.reload(true)
    })

  }


  }

  
  return (
    <div>
      <div className='ContentuploadContainer'>
        <div style={{display:'flex', aligmItems:'center',padding:'10px'}}>
          <img src={`${user?.other?.profile}`}  className='profileimage' alt=''/>
          <input type="text" className="contentwriting" placeholder='write your real thought...' onChange={(e)=>setTitle(e.target.value)}/>
        </div >
         
        <div style={{ marginLeft:'10px'}}>
          {imagePre !== null ? <img src={imagePre} style={{width:'350px', height:'200px',objectFit:'cover',borderRadius:'10px'}} alt=''/> :VideoPre !== null ? 
  <video className='PostImages' width="300px" height="500px" controls >
  <source src={VideoPre} type="video/mp4"/>
</video>: ''
}
          
          <div style={{display:'flex', justifyContent:'space-between'}}>
    
        <div >
          <label htmlFor='file'>
        <img src={`${imageIcon}`}  className='icons' alt=''/>
        <input type="file" name="file" id="file" style={{display:"none"}} onChange={(e)=>[setFile(e.target.files[0]) , setImagePre(URL.createObjectURL(e.target.files[0]))]}/>
        </label>
        <img src={`${emojiIcon}`}  className='icons' alt=''/>

        <label htmlFor='file2'>
        <img src={`${VideoIcon}`}  className='icons' alt=''/>
        <input type="file" name="file2" id="file2" style={{display:"none"}} onChange={(e)=>[setFile2(e.target.files[0]), setVideoPre(URL.createObjectURL(e.target.files[0]))]}/>
        </label>
        <button style={{marginLeft:'175px',paddingLeft:'10px',paddingRight:'10px',paddingTop:'6px',paddingBottom:'6px',border:'none',backgroundColor:'black',color:'white',borderRadius:'5px',cursor:'pointer',height:'25px'}} onClick={handlePost}>Post</button>

        </div>
                
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContentPost