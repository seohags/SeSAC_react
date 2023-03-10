import React from 'react'
import { useState } from 'react'

export default function ChangeObj(props) {
const [index, setIndex] = useState(0);
const obj = props.objArr[index];

function changeProfile() {
    if(index === props.objArr.length -1) {
        setIndex(0);
    } else {
        setIndex(index + 1);
    }
}

  return (
    <div>
        <h2>이름 : {obj.name}</h2>
        <h2>나이 : {obj.age}</h2>
        <h2>별명 : {obj.nickName}</h2>
        <button onClick={changeProfile}>change</button>
    </div>
  )
}
