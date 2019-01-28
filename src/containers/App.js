import React from 'react'
import { connect } from 'react-redux'
import { setCartVisibility } from '../actions'
import { getCartVisibility } from '../reducers'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { STORE_NAME, CART_EMPTY } from '../constants/Labels'
import './App.css'

const App = ({ setCartVisibility }) => (
  <div className="app">
    <div className="app__header">
      <h1 className="app__storeName">{STORE_NAME}</h1>
      <p
        className="app__cart"
        onClick={() => setCartVisibility(true)}>
        <img
          className="app__cartIcon"
          src="/img/cart.svg"
          alt="" />
        {CART_EMPTY}
      </p>
    </div>
    <hr />
    <ProductsContainer />
    <CartContainer />
  </div>
)

const mapStateToProps = (state) => ({
  isVisible: getCartVisibility(state)
})

export default connect(
  mapStateToProps,
  { setCartVisibility }
)(App)
