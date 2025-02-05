import React from 'react';
import { useState } from 'react';

import { useTodo } from './useTodo';
import Input from './input';
import List from './list';
import DeleteButton from './delete';

function Todo() {

    const { task, addTask, handleToggle, deleteTask, handleDelete } = useTodo();
    
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