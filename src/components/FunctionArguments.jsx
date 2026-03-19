import React from 'react'

const FunctionArguments = () => {

    let  count = 0 ;
    const handleClick = (name) => {
     
        if(count < 3){
             count++;
            console.log(`You clicking me ${count} times`);
           
            
        }
        else{
             console.log(`${name} stop clicking me`);
        }
        
    }

   

    

  return (
    <div>
        <button onClick={()=>handleClick('Godfrey')}>Click Me</button>
        
    </div>
  )
}

export default FunctionArguments