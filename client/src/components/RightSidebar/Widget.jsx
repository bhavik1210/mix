import React from 'react'
import './RightSidebar.css'
import comment from '../../Assests/comment-solid.svg'
import pen from '../../Assests/pen-solid.svg'
import blacklogo from '../../Assests/stack-overflow.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width='18'/>
          <p>From Twitter Bootstrap to VP of Engineering at Patreon, a chat with Utkarsh...</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={pen} alt="pen" width='18'/>
          <p> Continuous delivery, meet continuous security</p>
        </div>
        </div>

        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt="pen" width='18'/>
          <p>Inbox improvements are live...</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={comment} alt="pen" width='18'/>
          <p> Help us identify new roles for community members</p>
        </div>
        <div className='right-sidebar-div-2'>
          <img src={blacklogo} alt="pen" width='18'/>
          <p> Help needed: a call for volunteer reviewers for the Staging Ground beta test</p>
        </div>
        </div>

        <h4>Hot MetaPosts</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
        <p>19</p>
          <p>2022 Community Moderator Election Results</p>
        </div>
        <div className='right-sidebar-div-2'>
          <p>69</p>
          <p> Continuous delivery, meet continuous security</p>
        </div>
        </div>



    </div>
  )
}

export default Widget