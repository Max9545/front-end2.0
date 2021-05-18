import { useEffect, useState } from 'react'
import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';


function AlbumCardsDisplay({ albums }) {

 const [currentAlbums, setCurrentAlbums] = useState([])

  useEffect(() => {
    setCurrentAlbums(albums)
  }, [albums])

  const currentAlbumsDisplay = () => {
   return currentAlbums.map(({ coverImage, title, artists, year, genres }) => {
     return <AlbumCard 
              coverImage={coverImage}
              title={title}
              name={artists.name}
              year={year}
              genres={genres}
     />
   })
  }

  return (
    <div className='card-container' data-cy='card-container'>
      <h2>Albums</h2>
      {currentAlbums && currentAlbumsDisplay()}
    </div>
  )
}

export default AlbumCardsDisplay
