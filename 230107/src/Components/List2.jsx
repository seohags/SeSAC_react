import React from 'react'
import List2Child from './List2Child';

export default function List2() {
    const items = [
        {
          product: " ps5 ",
          price: "700,000",
        },
        {
          product: " shoes ",
          price: "1,700,000",
        },
        {
          product: " clothes ",
          price: "7,000,000",
        },
      ];
  return (
    <div>
        <h1>shopping List</h1>
        {items.map((el,index) => {
            return <List2Child product={el.product} price={el.price} key={index}/>;
        })}
        <hr />
        {items.map((el,index) => {
            return (
                <div key = {index}>
                    <h2>{el.product}</h2>
                    <p>{el.price}</p>
                </div>
            )
        })}
        </div>
  )
}
