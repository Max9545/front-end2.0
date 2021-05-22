import { GET_SINGLE_ALBUM }from '../../queries';
import { useQuery } from '@apollo/client';
import './AlbumCard.css'
import { ArtTrackOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { displayGenres } from '../../scripts';

function AlbumCard ({ title }) {
  const { loading, error, data } = useQuery(GET_SINGLE_ALBUM, {
    variables: { title: title }
  })
  
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const displayArtists = (list) => {
    return list.map(name => <p>{ name }</p>)
   }

  const deconstruct = ({ album }) => {
    return (
      <Link to={`/${album.title}`}>
        <img className='cover' data-cy='cover'src={album.coverImage}/>
        <h2 className='title' data-cy='title'>{album.title}</h2>
        <div className='artist-container' data-cy='artist-container'>
          { album.artists[0].name }
        </div>
        <h3 className='artist' data-cy='artist'>{}</h3>
        <p className='date' data-cy='date'>This Edition Released in {album.year}</p>
        <div className='genre-container' data-cy='genre-container'>
          { displayGenres(album.genres) }
        </div>
        <button className='discogs-link' data-cy='discogs-link' >Purchase on Discogs</button>
      </Link>
    )
  }

  return (
    <div className='card' data-cy='card'>
      { deconstruct(data) }
    </div>
  )
}

export default AlbumCard