import React from 'react'
import propic from './assets/profile-pic.jpg'

const Card = () => {
  return (
    <div className='card'>
       
        <img src={propic} alt="Profile Pic" />
        <h1 className='title'>Godfrey</h1>
        <p className='description'>This is my profile card</p>

    </div>
  )
}

export default Card