import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../Details/Details';
import discogsLogo from '../Details/assets/discogs_white.svg';
import { IconButton } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import AlbumIcon from '@material-ui/icons/Album';
import { style } from '../../scripts';
import { useQuery } from '@apollo/client';
import { GET_RANDOM_ALBUM, GET_SPOTIFY } from '../../queries';
import { displayGenres } from '../../scripts';
import { Skeleton } from '@material-ui/lab';

const RandomDetails = ({ 
  determineFav, 
  toggleFav, 
  isFavorite 
}) => {
  
  const [isFav, setIsFav] = useState(false);


  const refreshPage = () => {
    window.location.reload()
  }

  const handleFavoriteClick = () => {
    toggleFav(data1.randomAlbum.title);
    setIsFav(!isFav);
  }
  
  const QueryMultiple = () => {
    const res1 = useQuery(GET_RANDOM_ALBUM)

    const title = res1?.data?.randomAlbum?.title

    const res2 = useQuery(GET_SPOTIFY, {
        skip: !title,
        variables: { title: title }
    });

    return [res1, res2];
  }

  const [
    { loading: loading1, error: error1, data: data1 },
    { loading: loading2, error: error2, data: data2 }
  ] = QueryMultiple()


  useEffect(() => {
    if (data1) {
      setIsFav(isFavorite(data1.randomAlbum.title));
    }
  }, [data1])


  if (loading1 || loading2) return (
    <div className='card-container' data-cy='card-container'>
      <Skeleton animation="wave" height={675} width={878} />
    </div>
  )
  if (error1 || error2) return <h2 className="details_error">⚠️ We're sorry - something went wrong! Please try again later.</h2>;
  return (
    <>
      <section className="details_main" data-cy="details_main"> 
        <div className='random-details_nav' data-cy='random-details_nav'>
        <Link to="/" className="details_back-button click" data-cy="details_back-button">
          <KeyboardReturnIcon className="details_return-arrow"/>
            Back
        </Link>
        <button to="/random-album" className="details_back-button click" data-cy="details_back-button" onClick={ refreshPage }>
          
          <AlbumIcon className="details_return-arrow"/>
            Another Random Album
        </button>  
        </div>
        <div className="details_content" data-cy="details_content">
          <article className="details_box left">
            <img className="details_album-cover shadow" data-cy="details_album-cover" src={data1.randomAlbum.coverImage} alt={`${data1.randomAlbum.title} album cover`}/>
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
                <a className="details_discogs-link" data-cy="details_discogs-link" href={data1.randomAlbum.uri} target="_blnk">
                  <img className="details_discogs-logo" data-cy="details_discogs-logo" src={discogsLogo} alt="discogs logo"/>
                </a>
              </Tooltip>
            </div>
            <div className="details_main-text">
              <p data-cy="details_artist-name">Artist: {data1.randomAlbum.artists[0].name}</p>
              <p data-cy="details_album-title">Album: {data1.randomAlbum.title}</p>
              <p data-cy="details_release-year">Released: {data1.randomAlbum.year}</p>
              <div className='card_genre-container' data-cy='details_genre-container'>
                { displayGenres(data1.randomAlbum.genres) }
              </div>
            </div>
          </article>
          <article className="details_box right">
            <iframe className="shadow details_spotify-player" data-cy="details_web-player" title={`${data2.title} album album playlist`} src={`https://open.spotify.com/embed/album/${data2.spotifyAlbumId.id}`} allowtransparency="true" allow="encrypted-media"></iframe>
          </article>
        </div>        
      </section>
    </>
  )
}

export default RandomDetails;
