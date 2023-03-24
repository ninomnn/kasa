import './Rating.css'

const Rating = ({ rating }) => {
  const maxRating = 5
  const filledStars = Math.round(rating) // Arrondir la note à l'entier le plus proche
  const emptyStars = maxRating - filledStars

  const filledColor = '#FF6060'
  const emptyColor = '#E3E3E3'

  return (
    <div className="rating">
      {[...Array(filledStars)].map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
            fill={filledColor}
          />
        </svg>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
            fill={emptyColor}
          />
        </svg>
      ))}
    </div>
  )
}

export default Rating
