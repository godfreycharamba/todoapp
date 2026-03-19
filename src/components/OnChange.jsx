import React, { useState } from 'react'

const OnChange = () => {
    const [name , setName] = useState();
    const [age, setAge] = useState(0);
    const [message , setMessage] = useState();
    const [option , setOption] = useState("Visa");
    const [gender , setGender] = useState();

    const handleNameChange = (e)=>{
        setName(e.target.value);
    }

    const handleAgeChange = (e)=>{
        setAge(e.target.value);
    }

    const handleMessageChange =(e)=>{
         setMessage(e.target.value);
    }

    const handleOptionChange = (e) => {
      setOption(e.target.value);
    }

    const handleGenderChange = (e) => {
           setGender(e.target.value);
    }

  return (
    <div>
        <input type="text" value={name} onChange={handleNameChange} placeholder='Enter your name'/>
        <p>Name : {name}</p>

         <input type="number" value={age} onChange={handleAgeChange} placeholder='Enter your age'/>
        <p>Age : {age}</p>

        <textarea name="" id="" placeholder='Message' value={message} onChange={handleMessageChange}></textarea>
        <p>Message : {message}</p>

        <select name="" id="" onChange={handleOptionChange}>
             <option value="Visa">Visa</option>
             <option value="MasterCard">MasterCard</option>
             <option value="CreditCard">CreditCard</option>
             <option value="PayPal">PayPal</option>
        </select>
        <p>Option : {option}</p>
        <label htmlFor="">
          male
        </label>
        <input type="radio" value= "male" onChange={handleGenderChange} name="gender" /> <br />
        <label htmlFor="">female</label>
        <input type="radio" value="female" onChange={handleGenderChange}  name="gender"/>

        <p>Gender : {gender} </p>

    </div>
  )
}

export default OnChange