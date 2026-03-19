import React from 'react'

const EventHandling = () => {
    const imageURL = './src/assets/profile-pic.jpg'
    const handleClick = (e) => {
        e.target.innerText = "OUCH!!";
          
    }

    const handleClick2 = (e) => {
      e.target.style.display = "none";
      
    }

  return (
    <div>
        <button onClick={(e)=>handleClick(e)}>Click Me</button>

        <img width={150} onClick={handleClick2} src={imageURL} alt="profile pic" />
    </div>
  )
}

export default EventHandling