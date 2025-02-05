import React from 'react';
import { useState } from 'react';

import Input from './input';
import List from './list';
import DeleteButton from './delete';

function Todo() {
    const [task, setTask] = useState([]);

    function addTask(text) {
        const newTodo = {
            id: Date.now(),
            done: false,
            text,
        };
        setTask([...task, newTodo]);
    };

    const handleToggle = (id) => {
        const doneTask = task.map((todo) => {
            if(todo.id === id) {
                todo.done = !todo.done;
            }
            return todo;
        });
        setTask(doneTask);
    };

    const deleteTask = () => {
        const delTask = task.filter(todo => !todo.done);
        setTask(delTask);
    }

    const handleDelete = (id) => {
        const singleTask = task.filter(todo => todo.id !== id);
        setTask(singleTask);
    };

    return (
        <div className='mainDiv'>
            <h1>My To Do App</h1>
            <Input addTask={addTask} />
            <h2>To Do:</h2>
            <List task={task} toggle={handleToggle} delet={handleDelete} />
            <DeleteButton del={deleteTask} />
        </div>
    );
};

export default Todo;