import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

export default function TestRef() {
  const [text, setText] = useState("안녕하세요");

  const inputValue = useRef();

  function onChangeText() {
    setText(inputValue.current.valueText); // input태그에 값 입력하면 {text} <- 요기에 띄우는 함수
  }

  return (
    <div>
        <h1>{text}</h1>
        <input ref={inputValue} onChange={() => { onChangeText(); }} 
        />
    </div>
  )
}
