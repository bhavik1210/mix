import React from 'react'
import './Navbar1.css'
import searchIcon from '../Images/search.png'
import Notifications from '../Images/bell.png'
import Message from '../Images/message.png'
import Profileimage from '../Images/Profile.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../reducers/userReducer'

const Navbar1 = () => {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user
  console.log(userDetails)
  let id = user?.other?._id;
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const handleLogout =()=>{
    dispatch(logout())
    navigator("/Website/login");

  }

  return (
    <div className='mainNavbar'>
        <div className='LogoContainer'>
            <p>StackOverflow</p>
        </div>

        <div>
        <div className='searchInputContainer'>
            <img src={`${searchIcon}`} className="searchIcon" alt=''/>
            <input type="text" className='searchInput' placeholder='search your friends' name="" id=""/>

        </div>
        </div>

        <div className='IconsConatainer'>
        <img src={`${Notifications}`} className="Icons" alt=''/>
        <img src={`${Message}`} className="Icons" alt=''/>
        <Link to={`/Website/Profile/${id}`}>
        <div style={{display:'flex' , alignItems:'center'}}>
        <img src={`${user?.other?.profile}`} className="ProfileImage" alt=''/>
        <p style={{marginLeft:'5px'}}>{user?.other?.username}</p>
        </div>
        </Link>
        <div style={{marginRight:'30px', marginLeft:'20px', cursor:'pointer'}} onClick={handleLogout}>
          <p>Logout</p>
        </div>

        </div>

    </div>
  )
}

export default Navbar1