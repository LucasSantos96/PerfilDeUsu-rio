import React from 'react'

const Input = ({ className, ...rest }) => {
  return (
    <div className='w-full'>
    <input className={className} {...rest} />
    </div>
  )
}

export default Input