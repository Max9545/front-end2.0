import { GET_SINGLE_ALBUM }from '../../queries';
import { useQuery } from '@apollo/client';
import { Skeleton } from '@material-ui/lab';
import './AlbumCard.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function AlbumCard ({  album }) {

  console.log(album)
  // const [currentAlbum, setCurrentAlbum] = useState()


  // useEffect()
  // const { loading, error, data } = useQuery//(GET_SINGLE_ALBUM, {
  //   variables: { title: title }
  // })
  
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

  const deconstruct = ( album ) => {
    return (
      <>
        <Link  to={`/${album.title}`} className='card_details-link-container' data-cy='card_details-link-container'>
          <img className='card_cover' data-cy='card_cover'src={album.coverImage} alt={`Cover for ${album.title}`}/>
          <h2 className='card_title' data-cy='card_title'>{album.title}</h2>
          <p className='card_artist-container' data-cy='card_artist-container'>
            { album.artist }
          </p>
          {/* <h3 className='card_artist' data-cy='card_artist'>{}</h3> */}
          <p className='card_date' data-cy='card_date'>This Edition Released in {album.year}</p>
        </Link>
        <div className='card_genre-container' data-cy='card_genre-container'>
          {/* {album.format && displayGenres(album.format) } */}
        </div>
        {/* <a href={album.uri} target='_blank' className='card_discogs-link' data-cy='card_discogs-link' >Purchase on Discogs</a> */}
     
      </>
    )
  }

  return (
    <div className='card_card' data-cy='card_card'>
      { album && deconstruct(album) }
    </div>
  )
}

export default AlbumCard