import { div, img, title, p} from '../components/index.js'

const product = (props) => {
  const { 
    name,
    image,
    description,
    oldPrice,
    price,
    installmentsCount,
    installmentsValue
  } = props

  const card = div({ className: 'card' }) 
  const cardImage = img({ className: 'card-image', src: `http:${image}`, alt: `image-${name}` })
  const cardName = title({ className: 'card-name', productName: name})
  const cardDescription = p({ className: 'card-description', text: description, type: 'text' })
  const cardOldPrice = p({ className: 'card-oldPrice', text: `Old Price: ${oldPrice}`, type: 'text' })
  const cardPrice = p({ className: 'card-price', text: `por: ${price}`, type: 'text' })
  const cardInstallments= p({ className: 'card-installments', text: `ou ${installmentsCount}x de ${installmentsValue}`, type: 'text' })
  const cardBody = div({ className: 'card-body', children: cardName })

  cardBody.appendChild(cardDescription)
  cardBody.appendChild(cardOldPrice)
  cardBody.appendChild(cardPrice)
  cardBody.appendChild(cardInstallments)

  card.appendChild(cardImage)
  card.appendChild(cardBody)

  return card
}

export default product