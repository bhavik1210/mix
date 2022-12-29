import React from 'react'
import Leftbar from '../../components/LeftsideContainer/Leftbar'
import MainPost from '../../components/MainPostContainer/MainPost'
import Navbar1 from '../../components/Navbar1/Navbar1'
import Rightbar from '../../components/RightsideContainer/Rightbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import './Home1.css'
import { useSelector } from 'react-redux'

const Home1 = () => {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  console.log(user)
  return (
    <div className='home-container-1'>
    <LeftSidebar/>
    <div className='Home1'>
        <Navbar1/>
        <div className='ComponentContainer'>
            <Leftbar/>
            <MainPost/>
            <Rightbar/>
            </div>
        </div>
    </div>
  )
}

export default Home1