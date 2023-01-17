import React from 'react'



export default function InlineCss() {
const divStyle = {
    backgroundColor: "orange"
}

const headingStyle = {
    color: "blue"
}

const spanStyle = {
    backgroundColor: "pink",
    fontWeight: "700"
}

  return (
    <div style={divStyle}>
        <h1 style={headingStyle}>Css test component</h1>
        <span style={spanStyle}>해당 컴포넌트를 css로</span>
    </div>
  )
}
