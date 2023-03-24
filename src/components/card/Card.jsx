import './Card.css'
import { Link } from 'react-router-dom'

function Card({ title, image, id }) {
  const cardStyle = {
    backgroundImage: `url(${image})`,
  }

  return (
    <Link to={`/housing/${id}`} className="containerCard">
      <div className="cardImage" style={cardStyle}></div>
      <h3 className="cardTitle">{title}</h3>
    </Link>
  )
}

export default Card
