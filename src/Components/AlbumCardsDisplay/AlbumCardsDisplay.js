import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';

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