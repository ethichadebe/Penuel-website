import React from 'react'
import './Shows.css'
import dope_convo from "../../assets/shows/dope_convo.png"
import lives from "../../assets/shows/lives.png"
import the_koonvo_show from "../../assets/shows/the_koonvo_show.png"
import youTube from "../../assets/YouTube.png"

const Shows = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={dope_convo} alt="dope_convo" />
        <div className='caption'>
          <h2>The Konvo Show</h2>
          <p>The Konvo Show, hosted by God Penuel, covers current issues, finance, and relationships with guest insights, offering fresh perspectives, read more...</p>
        </div>
      </div>
      <div className="program">
        <img src={the_koonvo_show} alt="the_koonvo_show" />
        <div className='caption'>
          <h2>The Konvo Show</h2>
          <p>The Konvo Show, hosted by God Penuel, covers current issues, finance, and relationships with guest insights, offering fresh perspectives, read more...</p>
        </div>
      </div>
      <div className="program">
        <img src={lives} alt="lives" />
        <div className='caption'>
          <h2>The Konvo Show</h2>
          <p>The Konvo Show, hosted by God Penuel, covers current issues, finance, and relationships with guest insights, offering fresh perspectives, read more...</p>
        </div>
     </div>

    </div>
  )
}

export default Shows