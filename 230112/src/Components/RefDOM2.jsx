import React from 'react'
import { useRef } from 'react'

export default function RefDOM2() {
  const divEl = useRef();
  const inputEl = useRef();

  const adjustCSS = () => {
    divEl.current.style.backgroundColor = inputEl.current.value;
  };

  return (
    <div ref={divEl}>
       <input type="text" ref={inputEl}/>
       <br />
       <button onClick={adjustCSS}>색 적용</button>
    </div>
  )
}
