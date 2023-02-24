import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'

import { BrowserRouter as Router } from 'react-router-dom'

/* Les différentes routes pour les pages sont dans le composant "Main" */

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  )
}

export default App
