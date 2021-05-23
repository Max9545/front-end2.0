import { React, useState } from 'react';
import './Details.css';
import '../Details/assets/discogs_logo.svg'
import discogsLogo from '../Details/assets/discogs_logo.svg';
import { IconButton } from '@material-ui/core';
// import { FavoriteIcon, FavoriteBorderIcon } from '@material-ui/icons';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_SINGLE_ALBUM, GET_SPOTIFY } from '../../queries';
import { displayGenres } from '../../scripts';


const DetailsModal = ({ title, id, addFavorite, removeFavorite, determineFav, toggleFav, isFavorite }) => {
  const [isFav, setIsFav] = useState(isFavorite(title));

  const client = useApolloClient();

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
  
  return (
    <>
      <section className="details_main" data-cy="modal">
        <article className="details_box left">
          <img data-cy="album-cover" className="details_album-cover shadow" src={data1.album.coverImage} alt={`${data1.album.title} album cover`}/>
          <div className="details_links">
            <Tooltip title="Add to Favorites" placement="right">
              <IconButton
                className="details_favorite-button click" data-cy="favorites-button"
                aria-label={"Add to Favorites"}
                onClick={ () => {
                  toggleFav(data1.album.title);
                  setIsFav(!isFav);
                } }
                >
                { determineFav(isFav) }
              </IconButton>
            </Tooltip>
            <a data-cy="details_discogs-link" className="details_discogs-link" href={data1.album.uri} target="_blnk">
              <img className="details_discogs-logo" src={discogsLogo} alt="discogs logo"/>
            </a>
          </div>
          <div className="details_main-text">
            <p data-cy="artist-name">Artist: {data1.album.artists[0].name}</p>
            <p data-cy="album-title">Album: {data1.album.title}</p>
            <p data-cy="release-year">Released: {data1.album.year}</p>
            <div className='genre-container' data-cy='genre-container'>
              { displayGenres(data1.album.genres) }
            </div>
          </div>
        </article>
        <article className="details_box right">
          <iframe data-cy="web-player" title={`${data1.title} album album playlist`} className="shadow details_spotify-player" src={`https://open.spotify.com/embed/album/${data2.spotifyAlbumId.id}`} allowtransparency="true" allow="encrypted-media"></iframe>
        </article>
      </section>
      {/* <div className="close-container">
        <Tooltip title="Close">
          <CloseIcon data-cy="close-button" aria-label={"close modal"} className="close-icon click"/>
        </Tooltip>
      </div> */}
    </>
  )
}

export default DetailsModal;
