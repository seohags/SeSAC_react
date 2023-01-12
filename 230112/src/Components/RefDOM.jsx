import React from 'react'
import { useRef } from 'react';

export default function RefDOM() {
  const orangeEl = useRef();
  const skyblueEl = useRef();
  const inputEl = useRef();
  
  const adjustCSS = () => {
    orangeEl.current.style.backgroundColor = "orange";
    skyblueEl.current.style.backgroundColor = "skyblue";
  };

  const clearInput = () => {
    inputEl.current.value = "";
  };
  
  const clearCss = () => {
    orangeEl.current.style.backgroundColor = "";
    skyblueEl.current.style.backgroundColor = "";
  }

  return (
    <div>
        <h1 ref={orangeEl}>orange</h1>
        <h1 ref={skyblueEl}>skyblue</h1>
        <input type="text" ref={inputEl} />
        <br/>
        <button onClick={adjustCSS}>CSS적용</button>
        <button onClick={clearInput}>인풋 초기화</button>
        <button onClick={clearCss}>CSS 초기화</button>
    </div>
  )
}
