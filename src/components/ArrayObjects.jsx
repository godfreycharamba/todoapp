import React from 'react'
import { Lia500Px } from 'react-icons/lia'

const ArrayObjects = () => {
    const fruits = [{name:'mango' , calories: 95} ,
         {name:'banana', calories: 80} , 
         {name:'cherry' , calories: 50} ,
         {name:'orange' , calories:30}]

    const fruitobjects = fruits.map((fruit , index)=> <li>{fruit.name} : {fruit.calories}</li> ) 

    // {fruits.sort((a , b)=> a.name.localeCompare(b.name))} // alphabetic sorting
    // {fruits.sort((a , b)=> b.name.localeCompare(a.name))} // reverse alphabetic sorting

    // {fruits.sort((a,b)=> a.calories- b.calories)} // numeric sorting

    // {fruits.sort((a,b)=> b.calories- a.calories)} // reverse numeric sorting

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 70);
    const highCalFruits = fruits.filter((fruit)=> fruit.calories> 70);

     
  return (
    <div>
          
            <h1>List of all fruits</h1>
            {fruits.map((fruit , index)=> (
                <ul key={index}>
                      <li>{fruit.name}</li>
                      <li>{fruit.calories}</li>
                </ul>
               
            ))}
            {/* <ol>
               {fruitobjects}
            </ol> */}

            <h1>List of fruits with low Calories</h1>

        {lowCalFruits.map((lowCalFruit , index)=>(
            <ul key={index}>
                <li>{lowCalFruit.name}</li>
                <li>{lowCalFruit.calories}</li>
            </ul>

            
        ))}

        <h1>List of fruits with high calories</h1>

        {highCalFruits.map((highCalFruit , index) => (

            <ul key={index}>
                 <li>{highCalFruit.name}</li>
                  <li>{highCalFruit.calories}</li>
            </ul>
        ))}

        
            
        
       
    </div>
  )
}

export default ArrayObjects