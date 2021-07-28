/**
 * This function is responsible for create a img element
 * 
 * @param {Object} props
 * @returns {Element}
 */

const img = (props) => {
  const { className, src, alt } = props
  const element = document.createElement('img')

  className && element.classList.add(className)
  element.setAttribute('src', src)
  element.setAttribute('alt', alt)
  
  return element
}

export default img