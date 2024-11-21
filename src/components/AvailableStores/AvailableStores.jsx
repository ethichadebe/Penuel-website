import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AvailableStores.css'
import loot from "../../assets/book_stores/loot_logo.svg"
import takealot_logo from "../../assets/book_stores/takealot_logo.svg"
import amazon_logo from "../../assets/book_stores/amazon_logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'

const Shows = () => {
  const [shops, setShops] = useState([{image: loot,
                                      link:"https://www.loot.co.za/product/penuelism-principles/pwyc-7110-g780?srsltid=AfmBOopCS3WU7jeR0vdjC7TZfu95ox-8lOd0cveTuSlR9AzhEdLtd7PH"},
                                      {image: takealot_logo,
                                      link:"https://www.takealot.com/penuel-ism-principles/PLID71163201?srsltid=AfmBOoqvDOKITeipabRDc8mwFFp3YTR9-GCyBBqpvtEf05ftvDhYHWHF"},
                                      {image: amazon_logo,
                                      link:"https://www.amazon.com/Penuel-ism-Principles-Mlotshwa-ebook/dp/B08N1JT5YD/ref=sr_1_1?dib=eyJ2IjoiMSJ9.6HU3G1uPakAyHnbmyBVq6jI9-4zVqiP1LNM2swQoPuE.6hlwkKCNPgb1lnntD0-GOHtD9HvZ-hzyW8dFL-lUPgo&dib_tag=se&qid=1731847860&refinements=p_27%3AMr+Penuel+Mlotshwa&s=books&sr=1-1"}])
  return (
    <div className='stores'>
      {shops.map((shops) => (
        <div className="store">
          <img src={shops.image} alt="dope_convo" />
          <div className='external_link'>
            <Link to={shops.link} target="_blank" ><FontAwesomeIcon icon={faShop} className='cart-icon'/></Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shows