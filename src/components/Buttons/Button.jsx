import React from 'react';


const Button = ({
    onClick,
    type,
    className,
    spanClassName,
    label
}) => {
    return (
        <button
            onClick={onClick ? onClick : undefined}
            type={type}
            className={className}
        >
            <span className={spanClassName}></span>
            {label}
        </button>
    )
}

export default Button;
