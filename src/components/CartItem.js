import React from 'react'

const CartItem = (props) => {
  return (
    <div className="collection-item">
      <div className="row">
        <div className="col-md-8">{props.name}</div>
        <div className="col-md-2">${props.price / 100}</div>
        <div className="col-md-2">{props.quantity}</div>
      </div>
    </div>
  )
}

export default CartItem


