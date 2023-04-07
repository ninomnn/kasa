import Card from '../../components/card/Card'
import housingData from '../../datas/housing.json' //Ce sont les données du fichier JSON fournis
import '../../assets/IMG.jpg'
import './home.css'

function Home() {
  const cardList = housingData.map((card) => (
    <Card key={card.id} title={card.title} image={card.cover} id={card.id} />
  ))

  return (
    <section className="homePage">
      <div className="containerHero">
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <div className="containerCards">
        <div className="containerCardList">{cardList}</div>
      </div>
    </section>
  )
}

export default Home
