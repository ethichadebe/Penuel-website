import React from 'react'
import './Shop.css'
import fuck_fear from "../../assets/store/fuck_fear.png"
import penuelism from "../../assets/store/penuelism.png"
import rise_and_fall from "../../assets/store/rise_and_fall.png"
import perenting_with_penuel from "../../assets/store/perenting_with_penuel.png"

const Shop = () => {
  return (
    <div className='items'>
      <div className="item">
        <img src={fuck_fear} alt="dope_convo" />
        <div className='info'>
          <h3>Fuck Fear</h3>
          <p>Penuel Mlotshwa<br/>.</p>
          <h3>R50 eBook | R100 Hard copy</h3>
          <button className='btn read-more'>Read more</button>
        </div>
      </div>
      <div className="item">
        <img src={penuelism} alt="the_koonvo_show" />
        <div className='info'>
          <h3>Penuel(ism) principles</h3>
          <p>God Penuel <br/>(Previously Penuel Mlotshwa)</p>
          <h3>R50 eBook | R100 Hard copy</h3>
          <button className='btn read-more'>Read more</button>
        </div>
      </div>
      <div className="item">
        <img src={rise_and_fall} alt="lives" />
        <div className='info'>
          <h3>The Rise & Fall of The NSC</h3><p>How I made and lost my Millions | <br/>Penuel Mlotshwa</p>
          <h3>R50 eBook | R100 Hard copy</h3>
          <button className='btn read-more'>Read more</button>
        </div>
     </div>
     <div className="item">
        <img src={perenting_with_penuel} alt="lives" />
        <div className='info'>
          <h3>Parenting with Penuel</h3><p>Ey... Fuck them kids | <br/>Penuel Mlotshwa</p>
          <h3>R50 eBook | R100 Hard copy</h3>
          <button className='btn read-more'>Read more</button>
        </div>
     </div>

    </div>
  )
}

export default Shop