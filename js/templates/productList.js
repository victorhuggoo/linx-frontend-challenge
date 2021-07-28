import product from './product.js'

/**
 * This function is responsible for render product cards
 * 
 * @param {Object} props
 * @returns {Array}
 */

const productList = (props) => {
  const { items } = props

  return items.map(item => product(
    { 
      name: item.name, 
      image: item.image,
      description: item.description,
      oldPrice: item.oldPrice,
      price: item.price,
      installmentsCount: item.installments.count,
      installmentsValue: item.installments.value 
    }
  ))
}

export default productList