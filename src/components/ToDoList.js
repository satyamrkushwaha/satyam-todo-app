import React, { useState } from 'react';


export default function ToDoList({ todos, deleteTodo, toggleComplete, updateTask }) {

    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editedTask, setEditedTask] = useState("");

    const handleEditClick = (todo) => {
        setEditingTaskId(todo.id);
        setEditedTask(todo.task);
    };

    const handleSaveClick = (id) => {
        updateTask(id, editedTask);
        setEditingTaskId(null);
    };

    return (
        <div className='todo-list-main-container'>
            <div className='todo-list-table'>
                <div className='todo-list-header'>
                    <div>Task</div>
                    <div>Status</div>
                    <div>Delete</div>
                </div>
                {
                    todos.map((todo, i) => (
                        <div key={i} className='todo-task-row'>
                            <div>
                                {editingTaskId === todo.id ? (
                                    <input
                                        type="text"
                                        value={editedTask}
                                        onChange={(e) => setEditedTask(e.target.value)}
                                    />
                                ) : (
                                    <span onClick={() => handleEditClick(todo)}>
                                        {todo.task}
                                    </span>
                                )}
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleComplete(todo.id)}
                                />
                                {todo.completed ? " Completed" : " Incompleted"}
                            </div>
                            <div>
                                {editingTaskId === todo.id ? (
                                    <button onClick={() => handleSaveClick(todo.id)}>Save</button>
                                ) : (
                                    <span onClick={() => deleteTodo(todo.id)} className='delete-button'>x</span>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
