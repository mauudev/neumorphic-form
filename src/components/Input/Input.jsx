import React from 'react';

const Input = ({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=true,
    placeholder
}) => {
    return (
        <div className='form-input-content'>
            <span className="fa fa-user"></span>
            <input
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
