import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'
import ProductItem from './ProductItem'

const setup = product => {
  const actions = {
    onAddToCartClicked: jest.fn(),
    onRemoveFromCartClicked: jest.fn(),
    onCartQuantityChanged: jest.fn()
  }

  const component = shallow(
    <ProductItem product={product} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    addButton: component.find('button').first(),
    removeButton: component.find('button').last(),
    quantityInput: component.find('input'),
    product: component.find(Product)
  }
}

let productProps

describe('ProductItem component', () => {
  beforeEach(() => {
    productProps = {
      title: 'Product 1',
      price: 9.99,
      inventory: 6,
      initialInventory: 6
    }
  })

  it('should render product', () => {
    const { product } = setup(productProps)
    expect(product.props()).toEqual({ title: 'Product 1', price: 9.99, inventory: 6 })
  })

  it('should render Add To Cart message', () => {
    const { addButton } = setup(productProps)
    expect(addButton.text()).toMatch(/^Add to cart/)
  })

  it('should render Remove From Cart message', () => {
    const { removeButton } = setup(productProps)
    expect(removeButton.text()).toMatch(/^Remove from cart/)
  })

  it('should render quantity input', () => {
    const { quantityInput } = setup(productProps)
    expect(quantityInput.prop('value')).toEqual(0)
  })

  it('should not disable add button', () => {
    const { addButton } = setup(productProps)
    expect(addButton.prop('disabled')).toEqual('')
  })

  it('should disable remove button', () => {
    const { removeButton } = setup(productProps)
    expect(removeButton.prop('disabled')).toEqual('disabled')
  })

  it('should call action on add button click', () => {
    const { addButton, actions } = setup(productProps)
    addButton.simulate('click')
    expect(actions.onAddToCartClicked).toBeCalled()
  })

  it('should call action on remove button click', () => {
    const { removeButton, actions } = setup(productProps)
    removeButton.simulate('click')
    expect(actions.onRemoveFromCartClicked).toBeCalled()
  })

  it('should call action on quantity input change', () => {
    const { quantityInput, actions } = setup(productProps)
    quantityInput.simulate('change', { target: { value: 0 } })
    expect(actions.onCartQuantityChanged).toBeCalled()
  })

  describe('when product inventory is 0', () => {
    beforeEach(() => {
      productProps.inventory = 0
    })

    it('should render Sold Out message', () => {
      const { addButton } = setup(productProps)
      expect(addButton.text()).toMatch(/^Sold Out/)
    })

    it('should disable add button', () => {
      const { addButton } = setup(productProps)
      expect(addButton.prop('disabled')).toEqual('disabled')
    })

    it('should enable remove button', () => {
      const { removeButton } = setup(productProps)
      expect(removeButton.prop('disabled')).toEqual('')
    })

    it('should update cart quantity', () => {
      const { quantityInput } = setup(productProps)
      expect(quantityInput.prop('value')).toEqual(productProps.initialInventory)
    })
  })
})
