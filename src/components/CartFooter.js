import React from 'react'

const CartFooter = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark footer">
      <a className="navbar-brand" href="/">&copy; {props.copyright}</a>
    </nav>
  )
}

export default CartFooter


