import React from 'react'
import './AvailableStores.css'
import loot from "../../assets/book_stores/loot_logo.svg"
import takealot_logo from "../../assets/book_stores/takealot_logo.svg"
import amazon_logo from "../../assets/book_stores/amazon_logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'

const Shows = () => {
  return (
    <div className='stores'>
      <div className="store">
        <img src={loot} alt="dope_convo" />
        <div className='external_link'>
          <a href="https://www.tiktok.com/@godpenuel"  target="_blank"><FontAwesomeIcon icon={faShop} className='cart-icon'/></a>
        </div>
      </div>
      <div className="store">
        <img src={amazon_logo} alt="amazon_logo" />
        <div className='external_link'>
          <a href="https://www.tiktok.com/@godpenuel"  target="_blank" ><FontAwesomeIcon icon={faShop} className='cart-icon'/></a>
        </div>
      </div>
      <div className="store">
        <img src={takealot_logo} alt="lives" />
        <div className='external_link'>
          <a href="https://www.tiktok.com/@godpenuel"  target="_blank" ><FontAwesomeIcon icon={faShop} className='cart-icon'/></a>
        </div>
     </div>

    </div>
  )
}

export default Shows