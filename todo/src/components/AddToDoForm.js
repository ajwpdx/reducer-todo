import React, {useState} from 'react'

const AddToDoForm = props => {

    const {
        dispatch 
    } = props

    const [newToDoText, setNewToDoText] = useState("")

    const handleChanges = e => {
        setNewToDoText(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'ADD_TODO', payload: newToDoText})
    }

    return (
        <form onSubmit = {onSubmit}>
            <label htmlFor='addToDo'>
                Add an item:{' '}
                <input
                value={newToDoText}
                onChange={handleChanges}
                name='addToDo'
                id='addToDo'
                />
                {' '}
            </label>
            <button>Add!</button>
        </form>
    )

}

export default AddToDoForm