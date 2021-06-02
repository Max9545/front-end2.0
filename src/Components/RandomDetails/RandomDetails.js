import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../Details/Details';
import discogsLogo from '../Details/assets/discogs_white.svg';
import { IconButton } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { style } from '../../scripts';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_ALBUM } from '../../queries';
import { displayGenres } from '../../scripts';
import { Skeleton } from '@material-ui/lab';

const RandomDetails = ({ 
  determineFav, 
  toggleFav, 
  isFavorite 
}) => {
  
  const [isFav, setIsFav] = useState(false);

  const handleFavoriteClick = () => {
    toggleFav(data.album.title);
    setIsFav(!isFav);
  }
  const { loading, error, data } = useQuery(GET_RANDOM_ALBUM)
console.log(data)
  if (loading) return (
    <div className='card-container' data-cy='card-container'>
      <Skeleton animation="wave" height={675} width={878} />
    </div>
  )
  if (error) return <h2 className="details_error">⚠️ We're sorry - something went wrong! Please try again later.</h2>;
  
  return (
    <>
      <section className="details_main" data-cy="details_main"> 
        <Link to="/" className="details_back-button click" data-cy="details_back-button">
          <KeyboardReturnIcon className="details_return-arrow"/>
            Back
        </Link> 
        <div className="details_content" data-cy="details_content">
          <article className="details_box left">
            <img className="details_album-cover shadow" data-cy="details_album-cover" src={data.randomAlbum.coverImage} alt={`${data.randomAlbum.title} album cover`}/>
            <div className="details_links">
              <IconButton
                className="details_favorite-button click"
                data-cy="details_favorites-button"
                aria-label={"Add to Favorites"}
                style={style}
                onClick={ () => handleFavoriteClick() }
                >
                { determineFav(isFav) }
              </IconButton>
              <Tooltip title="View on Discogs" placement="right">
                <a className="details_discogs-link" data-cy="details_discogs-link" href={data.randomAlbum.uri} target="_blnk">
                  <img className="details_discogs-logo" data-cy="details_discogs-logo" src={discogsLogo} alt="discogs logo"/>
                </a>
              </Tooltip>
            </div>
            <div className="details_main-text">
              <p data-cy="details_artist-name">Artist: {data.randomAlbum.artists[0].name}</p>
              <p data-cy="details_album-title">Album: {data.randomAlbum.title}</p>
              <p data-cy="details_release-year">Released: {data.randomAlbum.year}</p>
              <div className='card_genre-container' data-cy='details_genre-container'>
                { displayGenres(data.randomAlbum.genres) }
              </div>
            </div>
          </article>
          <article className="details_box right">
            {/* <iframe className="shadow details_spotify-player" data-cy="details_web-player" title={`${data.randomAlbum.title} album album playlist`} src={`https://open.spotify.com/embed/album/${data.randomAlbum.spotifyAlbumId.id}`} allowtransparency="true" allow="encrypted-media"></iframe> */}
          </article>
        </div>        
      </section>
    </>
  )
}

export default RandomDetails;
