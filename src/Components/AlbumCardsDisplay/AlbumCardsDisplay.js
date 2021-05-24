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
    <div className='card-container' data-cy='card-container'>
      <h2>Albums</h2>
        {renderGivenAlbums(titles) }
    </div>
  )
}

export default AlbumCardsDisplay