/**
 * This function is responsible for create a P element
 * 
 * @param {Object} props
 * @returns {Element}
 */

const p = (props) => {
  const { className, text, type } = props
  const element = document.createElement('p')
  const textEl = document.createTextNode(text)

  className && element.classList.add(className)
  element.appendChild(textEl)

  return element
}

export default p