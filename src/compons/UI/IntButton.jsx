import React from 'react'

const IntButton = ({children, onClick}) => {
  return (
    <button className='IntBtn' onClick={onClick}>{children}</button>
  )
}

export default IntButton