import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import './Book.css'

const Book = () => {
  const book = useLocation().state.currentBook

  console.log(book)


  return (
    <div className='book'>
      <div className="book-left">
        <img src={book.image} className='book-img' alt={book.title} />
      </div>
      <div className="book-right">
        <h4>{book.author}</h4>
        <h2>{book.title}</h2>
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