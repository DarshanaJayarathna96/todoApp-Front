import React from 'react';
import axios from 'axios';
import '../App.css'

const Todo = ({id,title,completed}) => {
    
    const completeHandler=()=>{
      
        console.log(`Form submitted:`);
        console.log(`Todo title: ${title}`);
        console.log(`Todo completed: ${!completed}`);

        const editTodo = {
            title: title,
            completed:!completed
        };

        axios.patch('http://localhost:3001/tasks/'+id, editTodo)

    };

    const deleteHandler=()=>{

        axios.delete('http://localhost:3001/tasks/'+id)
        .then(res => console.log(res.data));

    };


    return(
        <div className="todo">
            <li className={`todo-item ${completed ? "completed":''}`}>{title}</li>

            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
                </button>

            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );


}

export default Todo;
