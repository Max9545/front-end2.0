import { GET_SINGLE_ALBUM }from '../../queries';
import { useQuery, useState } from '@apollo/client';
import '../AlbumCard/AlbumCard.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { Skeleton } from '@material-ui/lab';
import { displayGenres } from '../../scripts';

function FavoriteCard ({ title }) {



  const { loading, error, data } = useQuery(GET_SINGLE_ALBUM, {
    variables: { title: title }
  })

  if (loading) return (
    <div className='card_card' data-cy='card_card'>
      <Skeleton animation="wave" variant="rect" width={250} height={250} />
      <Skeleton animation="wave" variant="text" height={32} />
      <Skeleton animation="wave" variant="text" />
      <Skeleton animation="wave" variant="text" />
      <Skeleton animation="wave" variant="text" />
    </div>)


  if (error) return `Error! ${error.message}`  

  const deconstruct = ( album ) => {
  
    return (
      <>
        <Link  to={`/${album.album.title}`} className='card_details-link-container' data-cy='card_details-link-container'>
          <img className='card_cover' data-cy='card_cover'src={album.album.coverImage} alt={`Cover for ${album.title}`}/>
          <h2 className='card_title' data-cy='card_title'>{album.album.title}</h2>
          <p className='card_artist-container' data-cy='card_artist-container'>
            { album.album.artists[0].name }
          </p>
          <p className='card_date' data-cy='card_date'>This Edition Released in {album.album.year}</p>
        </Link>
        <div className='card_genre-container' data-cy='card_genre-container'>
          {album.album.genres && displayGenres(album.album.genres) }
        </div>
        <a href={album.album.uri} target='_blank' className='card_discogs-link' data-cy='card_discogs-link' >Purchase on Discogs</a>
      </>
    )
  }

  return (
    <div className='card_card' data-cy='card_card'>
      {deconstruct(data)}
    </div>
  )
}

export default FavoriteCard