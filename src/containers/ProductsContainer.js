import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, removeFromCart, updateCartQuantity } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'

const ProductsContainer = ({ products, addToCart, removeFromCart, updateCartQuantity }) => (
  <div>
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
        /*onRemoveFromCartClicked={() => removeFromCart(product.id)}
        onCartQuantityChanged={quantity => updateCartQuantity(product.id, quantity)}*/ />
    )}
  </div>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateCartQuantity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart, updateCartQuantity }
)(ProductsContainer)
