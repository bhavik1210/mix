import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux'
import './login.css'
import { login } from '../../reducers/apiCall'




const Login = () => {
  const dispatch = useDispatch();
   const {isFetching  , error} = useSelector((state)=>state.user);
  const [email , setemail]=useState('');
  const [password , setPassword]= useState('');
  const navigator = useNavigate();

 
  const handleClick =(e)=>{
    e.preventDefault();
    login(dispatch,{email ,password});
    navigator("/Website");


  }

  return (
    <div className='mainContainerForsignup'>
    <div className='submainContainer'>
        <div style={{flex:1,marginLeft:'150px', marginBottom:'170px'}}>
            <p className='logoText'>Null<span className='part'>class</span></p>
            <p className='introText'>Connect With <span className='part'>Nullclass Members</span></p>
        </div>
        <div style={{flex:3}}>
            <p className='createaccounttxt'>Login Account</p>
            <input type="email" id="email"  placeholder='Email' onChange={(e)=>setemail(e.target.value)} className='inputText'/>
            <input type="password" id="password" placeholder='*******'  onChange={(e)=>setPassword(e.target.value)}  className='inputText'/>
            <button className='btnforsignup' onClick={handleClick}>Login</button>
            <Link to={"/Website/forgot/password"}>
            <p style={{textAlign:'start' , marginLeft:'30%'}}>Forgot password</p>
            </Link>
            <Link to={"/Website/signup"}>
            <p style={{textAlign:'start' , marginLeft:'30%'}}>Create new Account</p>
            </Link>
        </div>

    </div>
    
</div>
  )
}

export default Login