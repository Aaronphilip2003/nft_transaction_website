import { useState } from 'react'
import { Footer, Loader, Navbar, Services, Transactions, Welcome } from './components';
import Metashard from './components/Metashard'
import logo from '../images/logo.png';
import Card from './components/Card'
import data from './components/data'
import solid from '../images/solid.gif'
import AboutUs from './components/AboutUs';

const images = data.map(info => {
  return <Card
  />
})

const App = () => {

  return (
    <div className="min-h-screen gradient-bg-welcome">
      <div>
        <Metashard />
        <Services />
        <Navbar />
        <Welcome />
      </div>
      {images}
      <Transactions />
      <Footer />
      <AboutUs/>
    </div>
  )
}

export default App
