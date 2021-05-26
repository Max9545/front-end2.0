import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';
import { useQuery } from '@apollo/client';
import { GET_ALBUMS_BY_ARTIST }from '../../queries';
import { Skeleton } from '@material-ui/lab';


function AlbumCardsDisplay ({ artist }) {

  const { loading, error, data } = useQuery(GET_ALBUMS_BY_ARTIST, {
    variables: { artist: artist }
  })

  if (loading) return (
    <div className='card-container' data-cy='card-container'>
      <Skeleton animation="wave" height={300} width={500} />
    </div>
  )
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