import React from 'react'

export default function CustomList(props) {
  return (
        <ul>
        {props.arr?.map((el,index) => <li key={index}>{el}</li>)}
        </ul>       
  )
}
