import React, {useId} from 'react'

const Select = ({
    options,
    label,
    className ='',
    ...props
},ref) => {
    const id = useId()
  return (
    <div className='w-full my-4 text-white font-bold'>
        {label &&
        <label htmlFor={id} className={`${className} `}></label>}
        <select {...props}
        id={id}
        ref={ref}
        className={`${className} px-3 py-2 mx-2 rounded-lg bg-black text-white outline-none focus:bg-gray-50 duration-200 border border-gray-200 full`}>
            {options?.map((option) =>(
                <option key={option} value={option} className='bg-black text-white'>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)