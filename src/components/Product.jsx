import React from 'react'

function Product(props) {
  return (
    <div>
      <img src={props.image} alt="" height={200} width={200}/>
      <h1>{props.name}</h1>
      <h3>Le prix est {props.price}</h3>
      <button>Buy</button>
      <hr></hr>
    </div>
  )
}

export default Product