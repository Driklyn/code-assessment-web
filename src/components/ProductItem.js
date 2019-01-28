import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { REMAINING, ADD_TO_CART, REMOVE_FROM_CART, SOLD_OUT } from '../constants/Labels'
import './ProductItem.css'

const ProductItem = ({ product, onAddToCartClicked, onRemoveFromCartClicked, onCartQuantityChanged }) => (
  <div className="productItem">
    <img
      className="productItem__photo"
      src={`/img/${product.title.toLowerCase()}.png`/* NOTE: Ideally the JSON would store a `photoUrl` string instead of using `title` here */}
      alt="" />
    <div className="productItem__container">
      <div className="productItem__topContainer">
        <h2 className="productItem__title">
          {product.title}
        </h2>
        <p className="productItem__price">
          &#36;{product.price}
        </p>
      </div>
      <div className="productItem__bottomContainer">
        <p className="productItem__inventory">
          {product.inventory} {REMAINING}
        </p>
        {!!onAddToCartClicked &&
          <Button
            className="productItem__button"
            onClick={onAddToCartClicked}
            disabled={product.inventory <= 0}>
              {product.inventory > 0 ? ADD_TO_CART : SOLD_OUT}
          </Button>}
        {!!onCartQuantityChanged &&
          <input
            onClick={e => e.target.select()}
            onChange={e => onCartQuantityChanged(parseInt(e.target.value, 10))}
            value={product.initialInventory - product.inventory} />}
        {!!onRemoveFromCartClicked &&
          <Button
            className="productItem__button"
            onClick={onRemoveFromCartClicked}
            disabled={product.inventory >= product.initialInventory}>
              {REMOVE_FROM_CART}
          </Button>}
      </div>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    initialInventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func,
  onRemoveFromCartClicked: PropTypes.func,
  onCartQuantityChanged: PropTypes.func
}

export default ProductItem
