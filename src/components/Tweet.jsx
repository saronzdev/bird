import React from 'react'
import dIcon from '../assets/delete.svg'
import cIcon from '../assets/comment.svg'
import fIcon from '../assets/fav.svg'
import sIcon from '../assets/save.svg'
import shIcon from '../assets/share.svg'
import '../styles/Tweet.css'

function Tweet({post, data}) {
  return (
    <div className='tw'>
      <div className='lf'></div>
      <div className='rg'>
        <div className='top'>
          <span className='name'>{data.name}</span>
          <span className='user'>@{data.username}</span>
        </div>
        <div className='dw'>
          <p className='txt'>{post}</p>
          <div className='btns-ctn'>
            <img className='btns' id='fav' src={fIcon} alt="" />
            <img className='btns' id='comment' src={cIcon} alt="" />
            <img className='btns' id='save' src={sIcon} alt="" />
            <img className='btns' id='share' src={shIcon} alt="" />
            {false && <img className='btns' id='delete' src={dIcon} alt="" />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet