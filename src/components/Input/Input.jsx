import React from 'react';

const Input = ({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = true,
    placeholder,
    iconClass
}) => {
    return (
        <div className='input-container'>
            <i className={iconClass}></i>  
            <input
                className='form-input'
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;
