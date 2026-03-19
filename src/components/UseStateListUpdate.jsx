import React, { useState } from 'react'

const UseStateListUpdate = () => {
    const [fruits , setFruit] = useState(["mango" , "banana" , "orange"]);

    const handleAddFruit = () => {
        const newFruit = document.getElementById('fruitName').value;
        document.getElementById('fruitName').value = "";

        setFruit(f => [...f,newFruit])

    }

    const handleClick = (index)=>{
        setFruit(fruits.filter((_,i) => i !== index ))
    }

  return (
    <div>
        <h1>List of Fruits</h1>
        <ul>
            {fruits.map((fruit , index)=> <li key={index} onClick={ ()=> handleClick(index)}>{fruit}</li> )}
        </ul>

        <input type="text" id='fruitName' placeholder='Enter fruit name' /> <br /> <br />
        <button onClick={handleAddFruit}>Add Fruit</button>
    </div>
  )
}

export default UseStateListUpdate