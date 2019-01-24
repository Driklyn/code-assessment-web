import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked, onRemoveFromCartClicked, onCartQuantityChanged }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory} />
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
    <input
      onClick={e => e.target.select()}
      onChange={e => onCartQuantityChanged(parseInt(e.target.value, 10))}
      value={product.initialInventory - product.inventory} />
    <button
      onClick={onRemoveFromCartClicked}
      disabled={product.inventory < product.initialInventory ? '' : 'disabled'}>
      Remove from cart
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired,
  onCartQuantityChanged: PropTypes.func.isRequired
}

export default ProductItem
