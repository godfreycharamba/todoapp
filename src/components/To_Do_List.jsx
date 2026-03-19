import React, { useState } from 'react'

const To_Do_List = () => {

    const [tasks , setTasks] = useState(["Reading" , "Eating breakfast" , "Coding"]);
    const [newTask , setNewTask] = useState();

    const handleChange =(e)=>{
          setNewTask(e.target.value)
    }
    
    const addTask = () => {
         
         if(newTask.trim() !== " "){
         setTasks(t=>[...t, newTask])
         setNewTask("");
         }
    }

    const removeTask = (index) =>{
            const updatedTasks = tasks.filter((_,i)=> i !== index)
            setTasks(updatedTasks)
    }

    const moveUp =(index)=>{
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index -1]] = [updatedTasks[index -1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveDown = (index) =>{
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index +1] , updatedTasks[index]] = [updatedTasks[index], updatedTasks[index +1]];
            setTasks(updatedTasks);
        }
    }

  return (
    <>
        <div className="app-container">
            <h1>To Do List App</h1>
            <input type="text" value={newTask} id='task' onChange={handleChange} placeholder='Enter new task'/>
            <button onClick={addTask} className='add-button'>Add</button>

           
            <ol>
                {tasks.map((task , index) => (
                        <li key={index}>
                            <span className='task-display'>{task}</span>
                            <button className='delete-button' onClick={()=> removeTask(index)}>Delete</button>
                            <button className='move-up-button' onClick={() => moveUp(index)}>Up</button>
                            <button className='move-down-button' onClick={() => moveDown(index)}>Down</button>
                        </li>
                ) )}
            </ol>
          
        </div>
        
    </>
  )
}

export default To_Do_List