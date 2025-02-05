import React from "react";

function List({task,toggle, delet}) {

    return (
        <ul>
            {task.map((todo) => (<li key={todo.id}>
                                        <input id={todo.id} type="checkbox" checked={todo.done} onChange={() => toggle(todo.id)} />
                                        <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                                        {todo.text}
                                        </span>
                                        <button onClick={() => delet(todo.id)}>Delete</button>
                                        </li>))}
        </ul>
    );
};

export default List;