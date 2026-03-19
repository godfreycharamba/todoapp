import React, { useEffect, useState } from 'react'

const APIConn = () => {
    const [data , setData] = useState([])

    useEffect(() =>{
      const fetchData = async () =>{

        try{
            const response = await fetch('http:127.0.0.1:8000/api/products');
            const data = await response.json();
            console.log(data);
            setData(data);
            
        }
        catch(error){
            console.error(error);
        }
      };

      fetchData()
        

    },[]);

  return (
    <div>
        {data.map((item) => {
            <p key={item.id}> {item.name} </p>
        })}
    </div>
  )
}

export default APIConn