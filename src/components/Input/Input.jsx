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
    placeholder
}) => {
    return (
        <div className='input-container'>
            { 
                type == "password" ? 
                <i className="fa fa-key icon"></i> :
                <i className="fa fa-user icon"></i>  
            }
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
