/**
 * Mocking client-server processing
 */
//import _products from './products.json'

const TIMEOUT = 100

const getProducts = async (callback) => {
  const productsUrl = 'http://tech.work.co/shopping-cart/products.json'

  try {
    const data = await fetch(productsUrl)
    let products = await data.json()

    products = products.map(product => {
      return {
        id: product.id,
        title: product.productTitle,
        price: product.price.value,
        inventory: product.inventory
      }
    })

    callback(products)
  } catch(e) {
    // TODO: failed state
  }
}

export default {
  //getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  getProducts,
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
