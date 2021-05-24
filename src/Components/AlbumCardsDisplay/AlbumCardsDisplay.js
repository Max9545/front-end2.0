import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';
import { useQuery } from '@apollo/client';
import { GET_ALBUMS_BY_ARTIST }from '../../queries';

function AlbumCardsDisplay ({ titles }) {
  
  const renderGivenAlbums = (titles) => {
    return titles.map(title => {
      return (
      <AlbumCard
        title={ title }
      />
      )
    })
  }

  return (
    <div className='card-container glass' data-cy='card-container'>
      {renderGivenAlbums(titles) }
    </div>
  )
}

export default AlbumCardsDisplay