import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';


// 변수명 잘 짓자 ! ㅋ
export default function Calculate() {
    const firstRandomNumber = Math.floor(Math.random() * 10);
    const secondRandomNumer = Math.floor(Math.random() * 10);
    const arithmeticArr = ['+' , '-',  '*'];
    const arithmetic = Math.floor(Math.random() * 3);

    let answer = 0;
    if (arithmetic === 0) {
        answer = firstRandomNumber + secondRandomNumer;
    } else if (arithmetic === 1) {
        answer = firstRandomNumber - secondRandomNumer;
    } else {
        answer = firstRandomNumber * secondRandomNumer;
    }

    const answerInput = useRef();
    const [again, setAgain] = useState(false);

    const checkAnswer = () => {
        if (answer === Number(answerInput.current.value)){
            alert("정답입니다");
            answerInput.current.value = '';
            answerInput.current.focus();
            setAgain(!again);
            } else {
            alert("오답입니다");
            answerInput.current.value = '';
            answerInput.current.focus();
        }
    }
     return (
    <div>
        <h2>{firstRandomNumber} {arithmeticArr[arithmetic]} {secondRandomNumer}</h2>
        <input type="text" ref={answerInput}/><br/>
        <button onClick={checkAnswer}>정답 제출</button>
    </div>
  )
}
