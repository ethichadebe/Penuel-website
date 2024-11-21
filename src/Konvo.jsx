import React from 'react'
import Navbar from './components/Navbar/Navbar'
import KonvoHero from './components/KonvoHero/KonvoHero'
import Title from './components/Title/Title'
import Episodes from './components/Episodes/Episodes'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <KonvoHero/>
        <Title subTitle="" title="Most popular episodes"/>
        <Episodes/>
        <Title subTitle="Get in touch" title="Contact"/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App