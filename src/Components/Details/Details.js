import React from 'react';
import './Details.css';
import '../Details/assets/discogs_logo.svg'
// import albums from '../../mockData';
import discogsLogo from '../Details/assets/discogs_logo.svg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import { Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useQuery, useApolloClient, gql } from '@apollo/client';
import { GET_SINGLE_ALBUM, GET_SPOTIFY } from '../../queries';


const DetailsModal = ({ title, id }) => {
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

  return (
    <div className="modal-container">
      <section className="modal" data-cy="modal">
        <article className="box left">
          <img data-cy="album-cover" className="album-cover shadow" src={data1.album.coverImage} alt={`${data1.album.title} album cover`}/>
          <div className="links">
          <Tooltip title="Add to Favorites" placement="right">
            <FavoriteBorderIcon data-cy="favorites-button" aria-label={"Add to Favorites"} className="favorite-button click"/>
          </Tooltip>
            <div data-cy="" className="discogs-link-details">
              <a data-cy="discogs-link" className="direct-link" href={data1.album.uri} target="_blnk"><img className="discogs-logo" src={discogsLogo} alt="discogs logo"/></a>
            </div>
          </div>
          <div className="modal-text">
            <p data-cy="artist-name">{data1.album.artists[0].name}</p>
            <p data-cy="album-title">{data1.album.title}</p>
            <p data-cy="release-year">Released: {data1.album.year}</p>
          </div>
        </article>
        <article className="box right">
          <iframe data-cy="web-player" title={`${data1.title} album album playlist`} className="shadow spotify-player" src={`https://open.spotify.com/embed/album/${data2.spotifyAlbumId.id}`} allowtransparency="true" allow="encrypted-media"></iframe>
        </article>
      </section>
      <div className="close-container">
        <Tooltip title="Close">
          <CloseIcon data-cy="close-button" aria-label={"close modal"} className="close-icon click"/>
        </Tooltip>
      </div>
    </div>
  )
}

export default DetailsModal;
