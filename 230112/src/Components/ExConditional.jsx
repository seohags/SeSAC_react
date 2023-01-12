import React from 'react'
import { useState } from 'react'
import Practice1 from './Practice1';
import Practice2 from './Practice2';

export default function ExConditional() {
  const [condition, setCondition] = useState("1번 컴포넌트");

  const onChange = () => {
    condition === '1번 컴포넌트' ? setCondition('2번 컴포넌트') : setCondition("1번 컴포넌트")
  }
  
  const ConditionalRender = condition === '1번 컴포넌트' ? <Practice1 text={condition}/> : <Practice2 text={condition}/> 

  return (
    <>
   {ConditionalRender}
   <button onClick={onChange}>{condition}</button>
    </>
  )
}
