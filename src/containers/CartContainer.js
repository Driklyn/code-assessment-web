import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, setCartVisibility } from '../actions'
import { getCartVisibility, getCartProducts, getTotal } from '../reducers'
import Cart from '../components/Cart'
import './CartContainer.css'

const setPageScrolling = isAllowed => {
  document.body.style.overflow = !isAllowed ? 'hidden' : ''
  return true;
}

const CartContainer = ({ isVisible, products, total, checkout, setCartVisibility }) => (
  setPageScrolling(!isVisible) && isVisible &&
    <div
      className="cartModal"
      onClick={e => e.target.classList.contains('cartModal') && setCartVisibility(false)}>
      <div className="cartModal__contents">
        <Cart
          products={products}
          total={total}
          onCheckoutClicked={() => checkout(products)} />
      </div>
    </div>
)

CartContainer.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  setCartVisibility: PropTypes.func.isRequired
}

CartContainer.defaultProps = {
  isVisible: false
}

const mapStateToProps = (state) => ({
  isVisible: getCartVisibility(state),
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout, setCartVisibility }
)(CartContainer)
