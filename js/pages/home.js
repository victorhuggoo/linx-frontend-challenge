import api from '../services/api.js'
import env from "../env.js"

import { productList } from '../templates/index.js'

const home = () => {
  let apiUrl = env.API_URL 
  const moreProductsBtn = document.getElementById('more-products-btn')

  const fetchProducts = async () => {
    await api(apiUrl, onProductsFetched, (err) => console.log(err))
  }
  
  const onProductsFetched = (data) => {
    const { products, nextPage: page } = data
    nextPage(page)
    renderProducts(products)
  }
  
  const nextPage = (page) => {
    apiUrl = `https://${page}`
  }
  
  const renderProducts = (products) => {
    const productListEl = document.getElementById('product-list')
    productList({ items: products }).forEach(product => productListEl.appendChild(product))
  }
  
  fetchProducts()
  moreProductsBtn.addEventListener('click', fetchProducts)
}

export default home