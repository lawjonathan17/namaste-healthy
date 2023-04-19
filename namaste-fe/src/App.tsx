import { useState } from 'react'

import './App.css'

import { Link, Routes, Route } from "react-router-dom"

// Pages
import Asanas from "./pages/asanas"
import { About } from "./pages/about"
import { Home } from "./pages/home"
import { Meditation } from "./pages/meditation"




function App() {

  const renderNavbar = () => {
    return (
      <>
        <div className="nav-bar">
          <h1 className="namaste-healthy">Namaste Healthy</h1>

          <nav className="menu-nav">
            <ul className="menu-ul">
              <li className="menu-li"><Link to="/">Home</Link></li>
              <li className="menu-li"><Link to="/about">About</Link></li>
              <li className="menu-li"><Link to="/asanas">Asanas</Link></li>
              <li className="menu-li"><Link to="/meditation">Meditation</Link></li>
            </ul>
          </nav>
        </div>

      </>

    )
  }


  return (
    <>
      {renderNavbar()}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/asanas" element={<Asanas />} />
        <Route path="/meditation" element={<Meditation />} />
      </Routes>
    </>

  )
}

export default App
