const button = (props) => {
  const { className, title } = props
  const element = document.createElement('button')

  className && element.classList.add(className)
  element.innerHTML = title
  
  return element
}

export default button