import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';

function AlbumCardsDisplay ({ artist }) {


function AlbumCardsDisplay ({ artist }) {

  const { loading, error, data } = useQuery(GET_ALBUMS_BY_ARTIST, {
    variables: { artist: artist }
  })

  if (loading) return (
    <div className='card-container' data-cy='card-container'>
      <Skeleton animation="wave" height={300} width={500} />
    </div>
  )
  if (error) return <h2 className="details_error">⚠️ We were unable to what you're looking for... please try again!</h2>

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