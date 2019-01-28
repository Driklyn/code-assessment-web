import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getCartVisibility, getCartProducts, getTotal } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ isVisible, products, total, checkout }) => (
  !!isVisible &&
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products)} />
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
  checkout: PropTypes.func.isRequired
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
  { checkout }
)(CartContainer)
