import React from 'react'
import Navbar1 from '../../components/Navbar1/Navbar1'
import './Profile.css'
import ProfileLeftbar from '../../components/ProfileLeftsideContainer/ProfileLeftbar'

import ProfileRightbar from '../../components/ProfileRightsideContainer/ProfileRightbar'
import ProfileMainPost from '../../components/ProfileMainPostContainer/ProfileMainPost'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useSelector } from 'react-redux'

const Profile = () => {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  console.log(user)
  return (
    <div className='home-container-1'>
    <LeftSidebar/>
    <div className='profileContainer'>
        <Navbar1/>
        <div className='subProfileContainer'>
            <ProfileLeftbar/>
            <ProfileMainPost/>
            
            <ProfileRightbar/>
            </div>
        </div>
    </div>
  )
}

export default Profile