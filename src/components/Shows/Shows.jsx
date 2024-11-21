import React from 'react'
import './Shows.css'
import dope_convo from "../../assets/shows/dope_convo.png"
import lives from "../../assets/shows/lives.png"
import the_koonvo_show from "../../assets/shows/the_koonvo_show.png"
import youTube from "../../assets/YouTube.png"
import { Link } from 'react-router-dom'

const Shows = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={dope_convo} alt="dope_convo" />
        <div className='caption'>
        <Link to="https://www.youtube.com/@Penuelism/playlists" target='_blank' className='read-more'>
          <h2>DOPE CONVERSATIONS</h2>
          <p>DOPE CONVERSATIONS with Penuel is a YouTube show where Penuel The Black Pen hosts open, thought-provoking discussions on social issues, personal growth, and current affairs with diverse guests.</p>
        </Link>
        </div>
      </div>
      <div className="program">
        <img src={the_koonvo_show} alt="the_koonvo_show" />
        <div className='caption'>
          <Link to="https://www.youtube.com/@konvo_za" className='read-more'>
            <h2>The Konvo Show</h2>
            <p>The Konvo Show, hosted by God Penuel, covers current issues, finance, and relationships with guest insights, offering fresh perspectives,
            </p>
          </Link>
        </div>
      </div>
      <div className="program">
        <img src={lives} alt="lives" />
        <div className='caption'>
        <Link to="https://www.youtube.com/@Penuelism/streams" target='_blank' className='read-more'>
          <h2>Youtube lives</h2>
          <p>Youtubbe live videos where Penuel The Black Pen dives into candid discussions on society, philosophy, and personal beliefs. These sessions often explore deep, sometimes controversial topics, encouraging open-minded dialogue and diverse perspectives.</p>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Shows