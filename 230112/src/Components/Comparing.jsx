import React, { useState } from 'react'
import { useRef } from 'react';

export default function Comparing() {
    const [countState, setState] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const [render,setRender] = useState(false);

    const countUpState = () => {
        setState(countState + 1);
        console.log('State : ', countState);
    }

    const countUpRef = () => {
        countRef.current = countRef.current + 1; // 그냥 countRef불러오면 객체로 불러와서 current 찍어줘야된다
        console.log('Ref : ', countRef.current);
    }

    const countUpVar = () => {
        countVar = countVar + 1;
        console.log('Variable ', countVar);
    }

    const reRender = () => {
        setRender(render + 1);
    }
    return (
    <div>
        <h1>State : {countState} </h1>
        <h1>Ref : {countRef.current} </h1>
        <h1>Variable : {countVar} </h1>
        <button onClick={countUpState}>State UP !</button>
        <button onClick={countUpRef}>Ref UP !</button>
        <button onClick={countUpVar}>Variable UP !</button>
        <button onClick={reRender}>Rendering !</button>
    </div>
  )
}
