import React, { Component } from 'react';
import './App.css';

// Components
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AddItem from './components/AddItem'

class App extends Component {
  state = {
    products: [],
    cartItemsList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
  }

  componentDidMount() {
    fetch('https://shopping-cart-backend.herokuapp.com/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data.items
        })
      })
  }

  addItem = (item) => {
    item.id = this.state.cartItemsList.length + 1
    const newCart = this.state.cartItemsList.concat(item)
    this.setState({
      cartItemsList: newCart
    })
  }

  calculateTotal = (cartItems) => {
    const totalCost = cartItems.reduce((total, item) => {
      return total + (item.product.priceInCents * item.quantity)
    }, 0)
    return totalCost
  }

  render() {
    const totalCost = this.calculateTotal(this.state.cartItemsList)

    return (
      <div className="App">
        <CartHeader />
        <div className="main-content">
          <CartItems cartItemsList={this.state.cartItemsList} totalCost={totalCost}/>
          <AddItem products={this.state.products} addItem={this.addItem} />
        </div>
        <CartFooter copyright={'2018'} />
      </div>
    );
  }
}

export default App;
