import React, { useState } from 'react'

const UseStatePassword = () => {
    const [value,setvalue]=useState("password");

  return (
    <div>
      <input type={value}/>
      <button
      onClick={()=>{
        setvalue("text");
      }}
      >
        Show
        </button>
        <button
        onClick={()=>{
            setvalue("password");
        }}
        >
            Hide
            </button>
    </div>
  )
}

export default UseStatePassword;
