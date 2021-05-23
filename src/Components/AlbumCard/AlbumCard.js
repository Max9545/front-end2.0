import { useState } from 'react';
import { GET_SINGLE_ALBUM }from '../../queries';
import { useQuery } from '@apollo/client';
import { IconButton } from '@material-ui/core';
import './AlbumCard.css'
import { Link } from 'react-router-dom'
// import { ArtTrackOutlined } from '@material-ui/icons';

function AlbumCard ({ title, determineFav, toggleFav, isFavorite }) {

  const [isFav, setIsFav] = useState(isFavorite(title));

  const handleFavoriteClick = () => {
    toggleFav(data.album.title);
    setIsFav(!isFav);
  }
  
  const { loading, error, data } = useQuery(GET_SINGLE_ALBUM, {
    variables: { title: title }
  })
  
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const displayGenres = (list) => {
   return list.map(genre => <p className='card_genre' data-cy='card_genre'>{genre}</p>)
  }

  const displayArtists = (list) => {
    return list.map(name => <p>{ name }</p>)
   }

  const deconstruct = ({ album }) => {
    return (
      <>
        <Link  to={`/${album.title}`} className='card_details-link-container' data-cy='card_details-link-container'>
          <img className='card_cover' data-cy='card_cover'src={album.coverImage} alt={`Cover for ${album.title}`}/>
          <h2 className='card_title' data-cy='card_title'>{album.title}</h2>
          <p className='card_artist-container' data-cy='card_artist-container'>
            { album.artists[0].name }
          </p>
          {/* <h3 className='card_artist' data-cy='card_artist'>{}</h3> */}
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
      <IconButton
        onClick={ () => handleFavoriteClick() } 
        className="card__favorite-btn"
        data-cy="card__favorite-btn"
      >
        { determineFav(isFav)}
      </IconButton>
    </div>
  )
}

export default AlbumCard