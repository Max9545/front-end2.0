import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';
import { useQuery } from '@apollo/client';
import { GET_ALBUMS_BY_ARTIST }from '../../queries';

function FavoriteAlbumsDisplay ({ titles }) {

// console.log(artist, titles)

 const { loading, error, data } = useQuery(GET_ALBUMS_BY_ARTIST, {
    variables: { artist: artist }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`  


  const renderGivenAlbums = (list) => {
    console.log(list)
    return list.map(album => {
      return <AlbumCard  artist={artist} album={album}/>
    })
  }

  return (
      <div className='card-container' data-cy='card-container'>
        <h2>Albums</h2>
        {renderGivenAlbums(titles) }
      </div>
  )
}

export default favoriteAlbumsDisplay