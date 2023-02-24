import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Accordion.css'
import downarrow from '../../assets/downarrow.svg'
import uparrow from '../../assets/uparrow.svg'

function Accordion(props) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="accordion">
      <div className="headerAccordion" onClick={toggleAccordion}>
        <h2 className="titleAccordion">{props.title}</h2>
        {isCollapsed ? (
          <img className="iconAccordion" src={downarrow} alt="Déplier" />
        ) : (
          <img className="iconAccordion" src={uparrow} alt="Replier" />
        )}
      </div>
      {!isCollapsed && (
        <div className="contentAccordion">{props.content}</div>
      )}
    </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Accordion
