import React, { useState } from 'react'

const UseStateObjectUpdate = () => {
   
    const [car , setCar] = useState({year:2024, make: "Ford" , model: "Mustang"});

    const handleYearChange = (e) => {
         setCar(c => ({...c,year : e.target.value}))
    }
    const handleMakeChange = (e) => {
         setCar(c => ({...c, make: e.target.value}))
    }
    const handleModelChange = (e) => {
        setCar(c => ({...c, model: e.target.value}))
    }

  return (
    <div>

        <h1>My favourite car is : {car.year} {car.make} {car.model} </h1>

        <input type="number" value={car.year} onChange={handleYearChange} /> <br /> <br />
        <input type="text" value={car.make} onChange={handleMakeChange} /> <br /> <br />
        <input type="text" value={car.model} onChange={handleModelChange} />

    </div>
  )
}

export default UseStateObjectUpdate