import './P404.css'
import { Link } from 'react-router-dom'

function P404() {
  return (
    <section className="P404">
      <div className="textP404">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to="/home" className="linkP404">
        Retourner sur la page d’accueil
      </Link>
    </section>
  )
}

export default P404
