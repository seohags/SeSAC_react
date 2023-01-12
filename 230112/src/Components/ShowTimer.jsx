import React from 'react'
import { useState } from 'react';
import Timer from './Timer';

export default function ShowTimer() {
    const [show, setShow] = useState(false);


  return (
    <div>
        {show && <Timer/>}
        <button onClick={() => {setShow(!show)}}>보이기</button>
    </div>
  )
}
