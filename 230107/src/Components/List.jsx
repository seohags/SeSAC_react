import React from 'react'
import ListChild from './ListChild'
import Modal from './Modal'

export default function List() {
  const dataArr = [
    {
      title: "리엑트 공부하기",
      content: "state 사용법 익히기",
    },
    {
      title: "코테 문제 풀기",
      content: "lv 0 정복"
    },
    {
      title: "d d d",
      content: "d d d"
    },
  ];

  return (
    <div>
        <h1>오늘 해야할 일</h1>
        <hr/>
        {dataArr.map((el, index) => {
          // return <ListChild title={el.title} content={el.content} key={index}/>;
          // return (
          //   <div key={index}>
          //     <h2>{el.title}</h2>
          //     <p>{el.content}</p>
          //     <hr/>
          // )
        })}
    </div>
  )
}

