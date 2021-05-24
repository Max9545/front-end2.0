import { useEffect, useState } from 'react'
import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';
import { useQuery } from '@apollo/client';

function AlbumCardsDisplay ({ titles }) {

  const renderGivenAlbums = (titles) => {
    return titles.map(title => {
      return (
      <AlbumCard
        title={ title }
        toggleFav={ toggleFav }
        determineFav={ determineFav }
        isFavorite={ isFavorite }
      />
      )
    })
  }

  return (
    <div className='card-container' data-cy='card-container'>
      <h2>Albums</h2>
        {renderGivenAlbums(titles) }
    </div>
  )
}

export default AlbumCardsDisplay