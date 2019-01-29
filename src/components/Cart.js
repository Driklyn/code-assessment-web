import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'
import { CART_NAME, CART_EMPTY_TIP } from '../constants/Labels'
import './Cart.css'

const Cart = ({ products, total, onCheckoutClicked }) => (
  <div className="cart">
    <h3 className="cart__name">
      {CART_NAME}
    </h3>
    <hr className="cart__divider" />
    {products.length > 0 &&
      products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
        />)}
    {!products.length &&
      <div className="cart__emptyContainer">
        <img
          className="cart__emptyIcon"
          src="img/cart-large.svg"
          alt="" />
        <p className="cart__emptyTip">
          {CART_EMPTY_TIP}
        </p>
      </div>}
    <p className="cart__total">
      Total: &#36;{total}
    </p>
    <button
      className="cart__checkout"
      onClick={onCheckoutClicked}
      disabled={products.length > 0 ? '' : 'disabled'}>
      Checkout
    </button>
  </div>
)

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    initialInventory: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
