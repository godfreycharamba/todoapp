import React, { useState } from 'react'

const ColorPicker = () => {

    const [color , setColor] = useState("#FFFFFF");

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }


  return (
    <div className='color-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor:color}}>

             <p className='text'>Selected color : {color} </p>
        </div>
       

        <p className='text' >Select a color</p>

        <input type="color" value={color} onChange={handleColorChange} />

    </div>
  )
}

export default ColorPicker