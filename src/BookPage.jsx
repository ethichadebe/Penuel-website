import React from 'react'
import Navbar from './components/Navbar/Navbar'
import AvailableStores from './components/AvailableStores/AvailableStores'
import Title from './components/Title/Title'
import Book from './components/Book/Book'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Book/>
        <Title subTitle="" title="Also available from"/>
        <AvailableStores/>
        <Title subTitle="Get in touch" title="Contact"/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App