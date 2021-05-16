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
     return <AlbumCard album={album}/>
   })
  }

  return (
    <>
      <h2>Albums</h2>
       { currentAlbums && currentAlbumsDisplay()}
    </>
  )
}

export default AlbumCardsDisplay