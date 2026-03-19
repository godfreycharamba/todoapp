import React, { useState } from 'react'


const UseStateHook1 = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = ()=>{
         setName("Godfrey");
    }

    const updateAge = ()=>{
        setAge(26);
        
    }

    const updateEmploymentStatus = ()=>{
        setIsEmployed(!isEmployed);
        
    }
  return (
    <div>
        <h1>Name : {name}</h1>

        <button onClick={updateName}>Set Name</button>

        <h1>Age : {age}</h1>

        <button onClick={updateAge}>Set Age</button>

        <h1>Is employed : {isEmployed ? "Yes" : "No"}</h1>
        <button onClick={updateEmploymentStatus}>Toggle Employment</button>

    </div>
  )
}

export default UseStateHook1