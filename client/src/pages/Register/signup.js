import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import './signup.css'
import { signup } from '../../reducers/apiCall'
import app from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Signup = () => {
  const dispatch = useDispatch();
   
  // const {isFetching  , error} = useSelector((state)=>state.user);
  let user = useSelector((state)=>state.user);
  // console.log(user.user.Status)

  const [email , setEmail] = useState('');
  const [phonenumber , setphonenumber] = useState('');
  const [username , setusername] = useState('');
  const [password , setpassword] = useState('');
  const [file , setfile] = useState(null);
  const userDetails = user.user;
  const navigator = useNavigate();

  const handleClick =(e)=>{
    
    e.preventDefault();
    

    
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
        signup(dispatch,{email ,password, username,phonenumber,profile:downloadURL});
        
        })
    
      });
  
  
    

  }


 if(userDetails?.Status === 'Pending'){
  navigator("/Website/verify/email");

 }
 console.log(userDetails?.Status)

  return (
    <div className='mainContainerForsignup'>
        <div className='submainContainer'>
            <div style={{flex:1,marginLeft:'150px', marginBottom:'170px'}}>
                <p className='logoText'>Null<span className='part'>class</span></p>
                <p className='introText'>Connect With <span className='part'>Nullclass Members</span></p>
            </div>
            <div style={{flex:3}}>
                <p className='createaccounttxt'>Create New Account</p>
                <input type="file" name="file" id="file"  onChange={(e)=>setfile(e.target.files[0])  }/>
                <input type="text" placeholder='Username' onChange={(e)=>setusername(e.target.value)} className='inputText'/>
                <input type="text" placeholder='Phonenumber' onChange={(e)=>setphonenumber(e.target.value)} className='inputText'/>
                <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)} className='inputText'/>
                <input type="password" placeholder='*******' onChange={(e)=>setpassword(e.target.value)} className='inputText'/>
                
                <button className='btnforsignup' onClick={handleClick}>Signup</button>
                <Link to={"/Website/login"}>
                <p style={{textAlign:'start' , marginLeft:'30%'}}>Already have a account</p>
                </Link>
            </div>

        </div>
        
    </div>
  )
}

export default Signup