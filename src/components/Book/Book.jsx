import React from 'react'
import './Book.css'

import fuck_fear from "../../assets/store/fuck_fear.png"
import penuelism from "../../assets/store/penuelism.png"
import rise_and_fall from "../../assets/store/rise_and_fall.png"
import perenting_with_penuel from "../../assets/store/perenting_with_penuel.png"

const Book = () => {
  return (
    <div className='book'>
      <div className="book-left">
        <img src={penuelism} className='book-img' alt="book image" />
      </div>
      <div className="book-right">
        <h4>God Penuel <br/>(Previously Penuel Mlotshwa)</h4>
        <h2>Penuel(ism) principles</h2>
        <p>The mind thrives on perception, so take charge of your thoughts and live in the present. Embrace minimalism, foster community, 
          and respect money while keeping resources within trusted circles. Adopt helpful beliefs, reject harmful ones, and judge by character, 
          not traits. Question history, learn from failure, live healthily, and respect nature. Adapt, communicate openly, teach your children, 
          and align personal goals with collective good. Life is about living fully and authentically.</p>
        <h3>R50 eBook | R100 Hard copy</h3>
        <button className='btn read-more'>Buy Book</button>
     </div>
    </div>
  )
}

export default Book