import React, { useState } from 'react'
import PropTypes from "prop-types";


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState("");

    const onInput = (e) => {
        setinputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats])
            setinputValue('')
        }
    }

    return (

        <form onSubmit={onSubmit} >

            <input
                type="text"
                value={inputValue}
                onChange={onInput}
            />

        </form>


    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

