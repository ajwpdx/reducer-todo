import React from 'react'

const ToDoItem = (props) => {
    const {
        item
    } = props
    return (
        <div>
            <p>{item.item}</p>
        </div>
    )        
}

export default ToDoItem