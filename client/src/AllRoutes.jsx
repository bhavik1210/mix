import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from './pages/UserProfile/UserProfile'
import Chatbot from './pages/Chatbot/Chatbot'
import Website from './pages/Website/Website'
import Home1 from './pages/Home1/Home1'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/login'
import Signup from './pages/Register/signup'
import Verifyemail from './pages/VerifyEmail/Verifyemail'
import Forgotpassword from './pages/Forgotpassword/Forgotpassword'
import Resetpassword from './pages/Resetpassword/Resetpassword'



import { useSelector } from 'react-redux'


import { Navigate } from 'react-router-dom'


const AllRoutes = () => {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user;
  

  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Auth'  element={<Auth />}/>
        <Route path='/Questions'  element={<Questions />}/>
        <Route path='/AskQuestion'  element={<AskQuestion />}/>
        <Route path='/Questions/:id'  element={<DisplayQuestion />}/>
        <Route path='/Tags' element={<Tags />}/>
        <Route path='/Users' element={<Users />}/>
        
        <Route path='/Chatbot' element={<Chatbot />}/>

        <Route path='/Website' element={  <Home1 /> }/>
        <Route path='/Website/Profile/:id' element={<Profile />}/>
        <Route path='/Website/login' element={  user?.other?.verified===true ? <Navigate to={"/Website"} replace={true}/> : <Login />}/>
        <Route path='/Website/signup' element={   <Signup/>}/>

        <Route path='/Website/verify/email' element={ user?.Status === 'Pending' ? <Verifyemail /> : user?.other?.verified=== true ? <Navigate to={"/Website"} replace={true}/> : <Login /> }/>
        <Route path='/Website/forgot/password' element={<Forgotpassword/>}/>
        <Route path="/Website/reset/password" element={<Resetpassword/>}/>
        
        

        
        



        <Route path='/Users/:id' element={<UserProfile />}/>
        



    </Routes>
  )
}

export default AllRoutes


