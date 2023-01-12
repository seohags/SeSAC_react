import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react'

// useEffect 는 특정 상황에만 실행되게 하는 hook 이다

export default function TestUseEffect() {
    const [count , setCount] = useState(0);
    const [text, setText] = useState("입력 하세요!");
    const inputValue = useRef();


    const onButtonClick = () => {
        console.log("버튼 클릭");
        setCount(count + 1);
    };

    const onInputChange = () => {
        console.log("키 입력");
        setText(inputValue.current.value);
    };

    useEffect(() => {
        console.log("렌더링 할 때 마다 실행되는 useEffect");
    });

    useEffect(() => {
        console.log("마운트 될 때 마다 실행되는 useEffect")
    }, []);

    useEffect(() => {
        console.log("버튼이 클릭 되었을 때만 실행되는 useEffect")
    },[count , text]);

    // useEffect(() => {
    //     console.log("텍스트가 입력 되었을 때만 실행되는 useEffect")
    // },[text]);

  return (
    <>
    <h1>{count}</h1>
    <button onClick={onButtonClick}>+1 버튼</button>
    <br/>
    <h1>{text}</h1>
    <input ref={inputValue} onChange={onInputChange}/>
    </>
  )
}
