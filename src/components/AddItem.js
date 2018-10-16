import React, { Component } from 'react';

class AddItem extends Component {
  state = {
    product: {
      id: '',
      name: '',
      priceInCents: ''
    },
    quantity: '',
  }

  handleProductChange = (event) => {
    const selectedName = event.target.value
    const product = this.props.products.filter(product => product.name === selectedName)[0]

    this.setState({ product }, () => console.log(this.state))
  }

  handleQuantityChange = (event) => {
    const key = event.target.name
    const value = event.target.value

    this.setState({ [key]: value }, () => console.log(this.state))
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    this.props.addItem(this.state)
  }

  render() {
    const productOptions = this.props.products.map(product => <option key={product.id}>{product.name}</option>);

    return (
      <form className="container" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Quantity</label>
          <input  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter a quantity..."
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.handleQuantityChange} />
        </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Product</label>
            <select className="form-control"
                  id="exampleFormControlSelect1"
                  placeholder="Select a product..."
                  onChange={this.handleProductChange}>
                {productOptions}
            </select>
          </div>
        <button type="submit" className="btn btn-primary mb-2">Add Item</button>
      </form>
    )
  }
}

export default AddItem