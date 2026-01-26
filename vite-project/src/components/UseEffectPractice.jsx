import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UseEffectPractice = () => {
    const [value,setvalue]=useState("");

    const handledClick=()=>{
        const a="This is usestate";
        console.log(a);
    };

    useEffect(()=>{
        const a="This is useeffect";
        console.log(a);
    },[]);
  return (
    <div>
      <button onClick={handledClick}>Click</button>
    </div>
  )
}

export default UseEffectPractice;
