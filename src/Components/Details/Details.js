import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Details.css';
import discogsLogo from '../Details/assets/discogs_white.svg';
import { IconButton } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { style } from '../../scripts';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_ALBUM, GET_SPOTIFY } from '../../queries';
import { displayGenres } from '../../scripts';


const Details = ({ 
  title, 
  determineFav, 
  toggleFav, 
  isFavorite 
}) => {
  
  const [isFav, setIsFav] = useState(isFavorite(title));



  useEffect(() => {
    setIsFav(isFavorite(title));
  }, [title])

  const handleFavoriteClick = () => {
    toggleFav(data1.album.title);
    setIsFav(!isFav);
  }

  const QueryMultiple = () => {
    const res1 = useQuery(GET_SINGLE_ALBUM, {
        variables: { title: title }
    });
    const res2 = useQuery(GET_SPOTIFY, {
        variables: { title: title }
    });

    return [res1, res2];
  }

  const [
    { loading: loading1, error: error1, data: data1 },
    { loading: loading2, error: error2, data: data2 }
  ] = QueryMultiple()

  if (loading1) return <p>Loading...</p>; 
  if (error1) return <p>Error :(</p>;
  if (loading2) return <p>Loading...</p>; 
  if (error2) return <p>Error :(</p>;

  const style = {
   color: 'snow'

  }
  
  return (
    <>
      <section className="details_main" data-cy="details_main"> 
        <Link to="/" className="details_back-button click" data-cy="details_back-button">
          <KeyboardReturnIcon className="details_return-arrow"/>
            Back
        </Link> 
        <div className="details_content" data-cy="details_content">
          <article className="details_box left">
            <img className="details_album-cover shadow" data-cy="details_album-cover" src={data1.album.coverImage} alt={`${data1.album.title} album cover`}/>
            <div className="details_links">
              <IconButton
                className="details_favorite-button" 
                data-cy="details_favorites-button"
                aria-label={"Add to Favorites"}
                style={style}
                onClick={ () => handleFavoriteClick() }
                >
                { determineFav(isFav) }
              </IconButton>
              <Tooltip title="View on Discogs" placement="right">
                <a className="details_discogs-link" data-cy="details_discogs-link" href={data1.album.uri} target="_blnk">
                  <img className="details_discogs-logo" data-cy="details_discogs-logo" src={discogsLogo} alt="discogs logo"/>
                </a>
              </Tooltip>
            </div>
            <div className="details_main-text">
              <p data-cy="details_artist-name">Artist: {data1.album.artists[0].name}</p>
              <p data-cy="details_album-title">Album: {data1.album.title}</p>
              <p data-cy="details_release-year">Released: {data1.album.year}</p>
              <div className='card_genre-container' data-cy='details_genre-container'>
                { displayGenres(data1.album.genres) }
              </div>
            </div>
          </article>
          <article className="details_box right">
            <iframe className="shadow details_spotify-player" data-cy="details_web-player" title={`${data1.title} album album playlist`} src={`https://open.spotify.com/embed/album/${data2.spotifyAlbumId.id}`} allowtransparency="true" allow="encrypted-media"></iframe>
          </article>
        </div>        
      </section>
    </>
  )
}

export default Details;
