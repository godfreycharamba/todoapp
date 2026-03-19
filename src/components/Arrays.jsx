import React from 'react'
import { Lia500Px } from 'react-icons/lia'

const Arrays = () => {
    
    const fruits = ['mango' , 'banana' , 'cherry' , 'orange']

    const myfuitlist = fruits.map((fruit , index) =><li key={index}>{fruit}</li>)

  

  return (
    <div>
        <ol>
          {myfuitlist}
        </ol>
        
  
    </div>
  )
}

export default Arrays