import React, { useState } from 'react'

export default function AddTodo({ addTodo }) {

    const [task, setTask] = useState()

    const handleInputTask = (e) => {
        e.preventDefault()
        if(task.trim){
            addTodo(task)
            setTask('')
        }
    }

    return (
  
            <form onSubmit={handleInputTask}>
                <input className='todo-input' type='text' placeholder='Enter task' value={task} onChange={(e)=>setTask(e.target.value)}></input>
                <button type='submit' >Add</button>
            </form>
    )
}
