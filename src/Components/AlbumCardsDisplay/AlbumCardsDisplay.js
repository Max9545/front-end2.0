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
      return <AlbumCard  album={album}/>
    })
  }

  return (
    <div className='card-container' data-cy='card-container'>
      {renderGivenAlbums(data.artistAlbums) }
    </div>
  )
}

export default AlbumCardsDisplay