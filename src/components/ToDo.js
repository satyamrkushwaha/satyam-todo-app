import React, { useState } from 'react'
import AddTodo from './AddToDo'
import ToDoList from './ToDoList'


export default function ToDo() {

    const [todos, setTodos] = useState([])

    const addTodo = (task) => {
        const newTodo = { id: Date.now(), task, completed: false };
        setTodos([...todos, newTodo])

    }
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const updateTask = (id, newTask) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, task: newTask } : todo
        ));
    };

    return (
        <div className='todo-app-main-container'>
            <AddTodo addTodo={addTodo} />
            <ToDoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} updateTask={updateTask} />
        </div>
    )
}
