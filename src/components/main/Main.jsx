import './Main.css'
import Home from '../../pages/home/home'
import Housing from '../../pages/housing/housing'
import About from '../../pages/about/about'
import P404 from '../../pages/P404/p404'

import { Route, Routes, Navigate } from 'react-router-dom'

/* Voici les différentes routes du routeur qui mènent aux différentes pages selon leurs url */

function Main() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<P404 />} />
      </Routes>
    </main>
  )
}

export default Main
