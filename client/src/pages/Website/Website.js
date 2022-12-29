import React from 'react'
import { Link } from 'react-router-dom'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useNavigate } from 'react-router-dom'
import Home1  from '../../pages/Home1/Home1'
import Profile from '../../pages/Profile/Profile'
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from '../../pages/Register/signup'

const Website = () => {
const navigate =useNavigate();

  return (
    <div className='home-container-1'>
    <LeftSidebar/>
   
    <div className="home-container-2">
    <Route path="/Website/signup" element={<Signup />}/>
         
     
   
    </div>
    

</div>
  );
}

export default Website