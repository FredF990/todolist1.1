import { useState } from "react";

function useTodo() {

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

    return {
        task,
        addTask,
        handleToggle,
        deleteTask,
        handleDelete
    }
};

export {useTodo};