import { GET_SINGLE_ALBUM }from '../../queries';
import { useQuery } from '@apollo/client';
import { Skeleton } from '@material-ui/lab';
import './AlbumCard.css'
import { Link } from 'react-router-dom'

function AlbumCard ({  album }) {
  
  if (loading) return (
    <div className='card_card' data-cy='card_card'>
      <Skeleton animation="wave" variant="rect" width={250} height={250} />
      <Skeleton animation="wave" variant="text" height={32} />
      <Skeleton animation="wave" variant="text" />
      <Skeleton animation="wave" variant="text" />
      <Skeleton animation="wave" variant="text" />
    </div>
  )
  if (error) return `Error! ${error.message}`

  const displayGenres = (list) => {
   return list.map(genre => <p className='card_genre' data-cy='card_genre'>{genre}</p>)
  }

  const displayArtists = (list) => {
    return list.map(name => <p>{ name }</p>)
   }


   const displayImage = (image) => {

    if(image && !image.includes('.gif')) {
      return (<img className='card_cover' data-cy='card_cover'src={album.coverImage} alt={`Cover for ${album.title}`}/>)
    } else {
      return (<img className='card_cover' data-cy='card_cover' src='/CoverFillStandIn.png' alt={`Cover for ${album.title}`}/>)
    }
   }

  const deconstruct = ( album ) => {
    return (
      <>
        <Link  to={`/${album.title}`} className='card_details-link-container' data-cy='card_details-link-container'>
          {displayImage(album.coverImage)}
          <h2 className='card_title' data-cy='card_title'>{album.title}</h2>
          <p className='card_artist-container' data-cy='card_artist-container'>
            { album.artists[0].name }
          </p>
          <p className='card_date' data-cy='card_date'>This Edition Released in {album.year}</p>
        </Link>
        <div className='card_genre-container' data-cy='card_genre-container'>
          { displayGenres(album.genres) }
        </div>
        <a href={album.uri} target='_blank' className='card_discogs-link' data-cy='card_discogs-link' >Purchase on Discogs</a>
      </>
    )
  }

  return (
    <div className='card_card' data-cy='card_card'>
      { deconstruct(data) }
    </div>
  )
}

export default AlbumCard