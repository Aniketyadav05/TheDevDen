import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full  font-bold mx-auto'>
            {label && <label
                className={`inline-block pl-1 mb-6 mx-2 bg-inherit ${className}`}
                htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 mx-2 rounded-lg   focus:bg-gray-50 duration-200 border border-gray-200 w-full${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input