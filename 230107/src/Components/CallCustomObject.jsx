import React from 'react'
import CustomObject from './CustomObject'

export default function CallCustomObject() {
    const pororoObj = {
        name: '로로뽀',
        age : '5',
        nickName: '펭귄'
    }
  return (
    <div>
        <CustomObject obj={pororoObj} />
    </div>
  )
}
