import React from 'react'

const Input = ({placeholder}) => {
  return (
    <div className='gap-3 mt-5 w-[100%]'>
        <input className='w-full h-[60px] rounded-[10px] bg-[#121212] p-5' placeholder={placeholder} />
    </div>
  )
}

export default Input