import React from 'react'

// Components
import CartItem from './CartItem'

const CartItems = (props) => {
  const cartItems =  props.cartItemsList.map(item => {
    const product = item.product
    return <CartItem  key={item.id}
                      name={product.name}
                      price={product.priceInCents}
                      quantity={item.quantity} />
  })

  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {cartItems}
      </div>
      <p className="total-cost">Total Cost: ${props.totalCost / 100}</p>
    </div>
  )
}

export default CartItems


