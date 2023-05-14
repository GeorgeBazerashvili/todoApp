import React from 'react'

function Input() {
  return (
    <>
    <div className="input-kit">
        <input type="text" placeholder='add your new todo'/>
        <button className='plus'>+</button>
    </div>
    </>
  )
}

export default Input