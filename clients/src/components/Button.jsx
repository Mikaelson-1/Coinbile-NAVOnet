import React from 'react'

const Button = ({title}) => {
  return (
    <div>
        <button className='button px-5 py-2 rounded'>
            {title}
        </button>
    </div>
  )
}

export default Button