import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { STORE_NAME } from '../constants/Labels'
import './App.css'

const App = () => (
  <div>
    <h1>{STORE_NAME}</h1>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
)

export default App
