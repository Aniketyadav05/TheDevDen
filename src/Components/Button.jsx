import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = '#eb7160',
    textColor = "black",
    className = '',
    ...props
}) => {
  return (
    <button 
        className={`relative cursor-pointer w-16 h-16 rounded-full bg-orange-500 shadow-lg shadow-gray-700 flex items-center justify-center ${className} ${bgColor} ${textColor}`} {...props}>
        {children}
    </button>    
)
}

export default Button