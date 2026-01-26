import React, { useState } from 'react'

const UseStatePractice = () => {
    const [value, setValue]= useState(10);
  return (
    <div>
    <button onClick={()=>{
        setValue(value+1);
    }}
    >Add</button>
    {value}
    <button
    onClick={()=>{
        setValue(value-1);
    }}
    >Sub</button>
    </div>
  )
}

export default UseStatePractice
