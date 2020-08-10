import React from 'react'

const AddToDoForm = props => {

    return (
        <form>
            <label htmlFor='addToDo'>
                Add an item:{' '}
                <input
                value=''
                name='addToDo'
                id='addToDo'
                />
            </label>
            <button>Add!</button>
        </form>
    )

}

export default AddToDoForm