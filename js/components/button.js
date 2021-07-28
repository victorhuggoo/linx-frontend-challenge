/**
 * This function is responsible for create a button element
 * 
 * @param {Object} props
 * @returns {Element}
 */

const button = (props) => {
  const { className, title } = props
  const element = document.createElement('button')

  className && element.classList.add(className)
  element.innerHTML = title
  
  return element
}

export default button