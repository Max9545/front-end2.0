import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';

function AlbumCardsDisplay ({ artist }) {



 const { loading, error, data } = useQuery(GET_ALBUMS_BY_ARTIST, {
    variables: { artist: artist }
  })

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`  


  const renderGivenAlbums = (list) => {
    return list.map(album => {
      return <AlbumCard  artist={artist} album={album}/>
    })
  }

  return (
    <div className='card-container glass' data-cy='card-container'>
      {renderGivenAlbums(titles) }
    </div>
  )
}

export default AlbumCardsDisplay