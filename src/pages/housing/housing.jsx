import './Housing.css'
import { useParams } from 'react-router-dom'
import housingData from '../../datas/housing.json' //Ce sont les données du fichier JSON fournis
import P404 from '../P404/P404'
import Carroussel from '../../components/carroussel/Carroussel'
import Accordion from '../../components/accordion/Accordion'
import Tag from '../../components/tag/Tag'
import Rating from '../../components/rating/Rating'

function Housing() {
  const { id } = useParams()
  const selectedHouse = housingData.find((house) => house.id === id)

  if (!selectedHouse) {
    return <P404 />
  }

  const equipmentsContent = selectedHouse.equipments.map((equipment) => (
    <txt key={equipment}>
      {equipment}
      <br />
    </txt>
  ))

  return (
    <section className="housing">
      <Carroussel images={selectedHouse.pictures} />
      <div className="headingsHousing">
        <div className="leftHeadingsHousing">
          <div className="titlesHousing">
            <h2>{selectedHouse.title}</h2>
            <p>{selectedHouse.location}</p>
          </div>
          <div className="tagsHousing">
            {selectedHouse.tags.map((tag, index) => (
              <Tag tag={tag} key={index} />
            ))}
          </div>
        </div>
        <div className="rightHeadingsHousing">
          <div className="hostInfosHousing">
            <p>{selectedHouse.host.name}</p>
            <img src={selectedHouse.host.picture} alt="Hébergeur" />
          </div>
          <Rating rating={selectedHouse.rating} />
        </div>
      </div>
      <div className="dropdownsHousing">
        <div className="oneDropdownHousing">
          <Accordion title="Description" content={selectedHouse.description} />
        </div>
        <div className="oneDropdownHousing">
          <Accordion title="Equipements" content={equipmentsContent} />
        </div>
      </div>
    </section>
  )
}

export default Housing
