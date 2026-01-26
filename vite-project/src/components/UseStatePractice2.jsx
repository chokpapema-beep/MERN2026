import React from 'react'
import { useState } from 'react';

const UseStatePractice2 = () => {
    const [show,setshow]=useState(true);
  return (
    <div>
        {show==true && <img src="/vite.svg"/>}
      <button>Show</button>
      <button onClick={()=>{
        setshow(!show);
      }}
      >
      {show ? "Hide" : "Show"}
      </button>
    </div>
  )
}

export default UseStatePractice2;
