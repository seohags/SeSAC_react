import React, { useState } from 'react'

export default function () {
    const [info, setInfo] = useState([
        {name: "코디", email: "codi@gmail.com"},
        {name:"소희", email: "sohee@gmail.com"}
    ])

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");


  return (
    <div>
        <input type = "text" name="name" value={name} onChange={(e) => (setName(e.target.value))}/>
        <input type = "text" name="email" value={email} onChange={(e) => (setEmail(e.target.value))}/>
        <button type='button' onClick={() => { 
        setInfo(info.concat({name: name, email: email}))
        setName('')
        setEmail('')
        }}>등록</button>
        {info.map((element, i) => { return <h2 key={i}>{element.name}: {element.email} </h2>})}
    </div>
  )
}
