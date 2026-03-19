import React, { useState } from 'react'

const UseStateArrayObAdd = () => {
    const [cars , setCars] = useState([]);
    const [year , setYear] = useState(new Date().getFullYear());
    const [make , setMake] = useState("")
    const [model, setModel] = useState("")

    const handleAddCar = () =>{
         const newCar = {year : year , make: make , model: model}
         setCars(c => [...c , newCar]);
         setYear(new Date().getFullYear());
         setMake("");
         setModel("");
    }

    const handleRemoveCar =(index) => {
         setCars(cars.filter((_,i) => i !==index))
    }

    const handleYearChange = (e) =>{
       setYear(e.target.value);
    }
    const handleMakeChange = (e) =>{
        setMake(e.target.value);
    }

    const handleModelChange = (e) =>{
        setModel(e.target.value);
    }
    
    return (
    <div>
        <h1>List of Cars</h1>
        <ul>
            {cars.map((car , index) => 
              
              <li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
            )}
        </ul>

        <input type="number" value={year} onChange={handleYearChange}/> <br /> <br />
        <input type="text" value={make} onChange={handleMakeChange} placeholder='Enter car make'/> <br /> <br />
        <input type="text" value={model} onChange={handleModelChange} placeholder='Enter car model'/> <br /> <br />
        <button onClick={handleAddCar}> Add Car</button> 
        
    </div>
  )
}

export default UseStateArrayObAdd