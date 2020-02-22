import React from "react"

function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() =>{props.handleChange(props.item.id)}}
            />
            <p className={props.item.completed ? "todo-item-completed" : null}>{props.item.description}</p>
        </div>
    )
}

export default ToDoItem;