// useEffect() = React Hook that tells React Do some code when :
// 1) This Component re-renders
// 2) This component Mountain
// 3) The state of a value changes 

// useEffect(function , [dependencies])

// 1) useEffect(()=>{})  //Runs after every re-render
// 2) useEffect(()=>{},[]) // Runs only on mount
// 3) useEffect(()=>{},[value]) // Runs on mount + when value changes

// USES 

// 1) Event listeners 
// 2) Dom Manipulation 
// 3) Subscriptions (real time updates)
// 4) Fetching data from API
// 5) Clean up when a component umounts

import React, { useEffect, useState } from 'react'


const UseEffect = () => {

    const [count , setCount] = useState(0);
    const [color , setColor] = useState("green");

    useEffect(() => {
        document.title = `Count : ${count} ${color}` ;
    }, [count , color]);

    const addCount =()=>{
        setCount(c => c +1);
    }

    const subtractCount =()=>{
        setCount(c => c -1);
    }

    const changeColor =()=>{
        setColor(c => c === "green" ? "red" : "green");
    }

  return (
    <div>
        <p style={{color: color}} >Count : {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button> <br />
        <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default UseEffect