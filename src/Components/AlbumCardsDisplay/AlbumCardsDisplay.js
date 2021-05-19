import { useEffect, useState } from 'react'
import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';

function AlbumCardsDisplay ({ titles }) {

  const renderGivenAlbums = () => {
    return titles.map(title => {
      return <AlbumCard title={ title } />
    })
  }

  return (
    <div className='card-container' data-cy='card-container'>
      <h2>Albums</h2>
        { renderGivenAlbums() }
    </div>
  )
}

export default AlbumCardsDisplay