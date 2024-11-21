import React, { useState } from 'react'
import './Shop.css'
import fuck_fear from "../../assets/store/fuck_fear.png"
import penuelism from "../../assets/store/penuelism.png"
import rise_and_fall from "../../assets/store/rise_and_fall.png"
import perenting_with_penuel from "../../assets/store/perenting_with_penuel.png"
import { Link } from 'react-router-dom'

const Shop = () => {
  const [books, setBooks] = useState([{image: fuck_fear,
                                        id: "Fuck_Fear",
                                        title:"Fuck Fear",
                                        author:"Penuel Mlotshwa\n.",
                                        price:"R50 eBook | R100 Hard copy",
                                        synopsis:""},{
                                      image: penuelism,
                                        id: "Penuelism_Principles",
                                        title:"Penuel(ism) principles",
                                        author:"God Penuel \n(Previously Penuel Mlotshwa)",
                                        price:"R50 eBook | R100 Hard copy",
                                        synopsis:""},{
                                      image: rise_and_fall,
                                        id: "The_Rise_&_Fall_of_The_NSC",
                                        title:"The Rise & Fall of The NSC",
                                        author:"How I made and lost my Millions | Penuel Mlotshwa",
                                        price:"R50 eBook | R100 Hard copy",
                                        synopsis:""},{
                                      image: perenting_with_penuel,
                                        id: "Parenting_with_Penuel",
                                        title:"Parenting with Penuel",
                                        author:"Ey... Fuck them kids | \nPenuel Mlotshwa",
                                        price:"R50 eBook | R100 Hard copy",
                                        synopsis:""}])

  return (
    <div className='items'>
      {books.map((book)=>(
        <div className="item" >
          <img src={book.image} alt={book.id} />
          <div className='info'>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <h3>{book.price}</h3>
            <Link key={book} to={`books/${book.id}`} state={{currentBook: book}} className='btn read-more'>Read more</Link>
          </div>
        </div>      
      ))}
    </div>
  )
}

export default Shop