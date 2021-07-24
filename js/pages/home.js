import api from '../services/api.js'
import env from "../env.js"

import { productList } from '../templates/index.js'

const home = () => {
  const fetchProducts = async () => {
    await api(env.API_URL, renderProducts, (err) => console.log(err))
  }

  const renderProducts = (data) => {
    const { products, nextPage } = data
    const productListEl = document.getElementById('product-list')
    
    productList({ items: products }).forEach(product => productListEl.appendChild(product))
  }

  fetchProducts()
}

export default home