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
        </form>
    )

}

export default AddToDoForm