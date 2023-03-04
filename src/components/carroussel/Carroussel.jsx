import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Carroussel.css'
import leftArrow from '../../assets/leftarrow.svg'
import rightArrow from '../../assets/rightarrow.svg'

const Carroussel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    const newIndex = currentImage + 1 >= images.length ? 0 : currentImage + 1
    setCurrentImage(newIndex)
  }

  const prevImage = () => {
    const newIndex = currentImage - 1 < 0 ? images.length - 1 : currentImage - 1
    setCurrentImage(newIndex)
  }

  return (
    <section className="containerCarroussel">
      <div className="containerImgCarroussel">
        <img
          className="imgCarroussel"
          src={images[currentImage]}
          alt={`${currentImage + 1}`}
        />
      </div>
      <div className="containerArrowCarroussel">
        <img
          className="arrowCarroussel"
          src={leftArrow}
          alt="Précédent"
          onClick={prevImage}
        />
        <img
          className="arrowCarroussel"
          src={rightArrow}
          alt="Suivant"
          onClick={nextImage}
        />
      </div>
    </section>
  )
}

Carroussel.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Carroussel
