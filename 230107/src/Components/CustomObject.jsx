import React from 'react'

export default function CustomObject(props) {
    if(props.obj) {
        const {name , age , nickName} = props.obj;
        return (
          <div>
              <h1>이름 : {name}</h1>
              <h2>나이 : {age}</h2>
              <h2>별명 : {nickName}</h2>
          </div>
        )
    } else {
        return (
            <div>
                no data
            </div>
        )
    }
}
