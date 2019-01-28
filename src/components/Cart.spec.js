import React from 'react'
import { shallow } from 'enzyme'
import Cart from './Cart'

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
    button: component.find('button'),
    products: component.find('ProductItem'),
    em: component.find('em'),
    p: component.find('p')
  }
}

describe('Cart component', () => {
  it('should display total', () => {
    const { p } = setup('76')
    expect(p.text()).toMatch(/^Total: \$76/)
  })

  it('should display add some products message', () => {
    const { em } = setup()
    expect(em.text()).toMatch(/^Please add some products to cart/)
  })

  it('should disable button', () => {
    const { button } = setup()
    expect(button.prop('disabled')).toEqual('disabled')
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

    it('should not disable button', () => {
      const { button } = setup('9.99', product)
      expect(button.prop('disabled')).toEqual('')
    })

    it('should call action on button click', () => {
      const { button, actions } = setup('9.99', product)
      button.simulate('click')
      expect(actions.onCheckoutClicked).toBeCalled()
    })
  })
})
