/**
 * This function is responsible for create a div element
 * 
 * @param {Object} props
 * @returns {Element}
 */

const div = (props) => {
  const { className, children } = props
  const element = document.createElement('div')

  className && element.classList.add(className)
  children && element.appendChild(typeof children === 'object' ? children : document.createTextNode(children))
  
  return element
}

export default div