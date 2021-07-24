const title = (props) => {
  const { className, productName } = props
  const h4 = document.createElement('h4')
  const text = document.createTextNode(productName)

  className && h4.classList.add(className)
  h4.appendChild(text)

  return h4

}

export default title