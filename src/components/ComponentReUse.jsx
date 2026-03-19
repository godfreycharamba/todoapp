import React from 'react'

const ComponentReUse = (props) => {
    
    const itemsList = props.items;
    const category = props.category ; 

    const ListItems = itemsList.map((fruit , index) => (
        <ul key={index}>
            <li>{fruit.name}</li>
            <li>{fruit.calories}</li>
        </ul>
    ))

  return (
    <div>
        <h1>{category}</h1>
         {ListItems}
    </div>
  )
}

ComponentReUse.defaultProps = {
    category: "Category",
    items: [],
}

export default ComponentReUse