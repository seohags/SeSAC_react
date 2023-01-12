import React from 'react'

export default function List2Child({product, price}) {
    
  return (
    <div>
        <h2>{product}</h2>
        <p>{price}</p>
        <hr/>
    </div>
  )
}
