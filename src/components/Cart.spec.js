import React from 'react'
import { shallow } from 'enzyme'
import Cart from './Cart'
import { CART_EMPTY_TIP } from '../constants/Labels'

const setup = (total, products = []) => {
  const actions = {
    onCheckoutClicked: jest.fn()
  }

  const component = shallow(
    <Cart products={products} total={total} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    products: component.find('ProductItem'),
    emptyTip: component.find('.cart__emptyTip'),
    total: component.find('.cart__total'),
    checkout: component.find('.cart__checkout'),
  }
}

describe('Cart component', () => {
  it('should display total', () => {
    const { total } = setup('76')
    expect(total.text()).toMatch(/^Total: \$76/)
  })

  it('should display add some products message', () => {
    const { emptyTip } = setup()
    expect(emptyTip.text()).toEqual(CART_EMPTY_TIP)
  })

  it('should disable checkout', () => {
    const { checkout } = setup()
    expect(checkout.prop('disabled')).toEqual('disabled')
  })

  describe('when given product', () => {
    const product = [
      {
        id: 1,
        title: 'Product 1',
        price: 9.99,
        inventory: 1,
        initialInventory: 1,
      }
    ]

    it('should render products', () => {
      const { products } = setup('9.99', product)
      expect(products.at(0).props()).toEqual({ product: product[0] })
    })

    it('should not disable checkout', () => {
      const { checkout } = setup('9.99', product)
      expect(checkout.prop('disabled')).toEqual('')
    })

    it('should call action on checkout click', () => {
      const { checkout, actions } = setup('9.99', product)
      checkout.simulate('click')
      expect(actions.onCheckoutClicked).toBeCalled()
    })
  })
})
