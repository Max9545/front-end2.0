import { useEffect, useState } from 'react'
import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';


function AlbumCardsDisplay({ albums }) {

 const [currentAlbums, setCurrentAlbums] = useState()

  useEffect(() => {
    setCurrentAlbums(albums)
  }, [albums])

  const currentAlbumsDisplay = () => {
   return currentAlbums.map(album => {
     return <AlbumCard 
              coverImage={album.coverImage}
              title={album.title}
              name={album.artists.name}
              year={album.year}
              genres={album.genres}
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