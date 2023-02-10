import React, { useState } from 'react'

export const AddCategory = ({ OnNewValue}) => {
    const [inputValue, setInputValue] = useState('');

    const OnInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onsubmit = (event) => {
        event.preventDefault();
        OnNewValue(inputValue);
        setInputValue('');

    }

    return (
        <form onSubmit={(event) => onsubmit(event)}>
        
            <input
                type="text"
                placeholder='Search'
                value={inputValue}
                onChange={(event) => OnInputChange(event)}
            />
        </form>

    )
}
