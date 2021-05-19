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
import { GET_SINGLE_ALBUM } from '../../queries';

  const SPOTIFY = gql`
  query {
   spotifyAlbumID(title: $title){
     id
   }
  }`


const DetailsModal = ({ title, id }) => {
  const client = useApolloClient();
  const discogsLink = 'https://www.discogs.com/James-Brown-The-Payback/master/33990';
  // const { albumLoading, albumError, albumData } = readQuery();
  // const { albumData } = client.readQuery({ 
  //   query: GET_SINGLE_ALBUM,
  //   variables: {
  //     title: title
  //   }
  // });
  console.log(title)
  const { loading, error, data } = useQuery(GET_SINGLE_ALBUM, {
    variables: { title: title }
  })
  // const { spotifyLoading, spotifyError, spotifyData } = useQuery(SPOTIFY, {
  //   variables: { title: title }
  // });

console.log(data)
  if (loading) return <p>Loading...</p>;
  // if (spotifyLoading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // if (spotifyError) return <p>Error :(</p>;

  
  return (
    <div className="modal-container">
      <section className="modal" data-cy="modal">
        <article className="box left">
          <img data-cy="album-cover" className="album-cover shadow" src={data.album.coverImage} alt={`${data.title} album cover`}/>
          <div className="links">
          <Tooltip title="Add to Favorites" placement="right">
            <FavoriteBorderIcon data-cy="favorites-button" aria-label={"Add to Favorites"} className="favorite-button click"/>
          </Tooltip>
            <div data-cy="" className="discogs-link-details">
              <a data-cy="discogs-link" className="direct-link" href={discogsLink} target="_blnk"><img className="discogs-logo" src={discogsLogo} alt="discogs logo"/></a>
            </div>
          </div>
          <div className="modal-text">
            <p data-cy="artist-name">{data.album.artists[0].name}</p>
            <p data-cy="album-title">{data.album.title}</p>
            <p data-cy="release-year">Released: {data.album.year}</p>
          </div>
        </article>
        <article className="box right">
          {/* <iframe data-cy="web-player" title={`${albumData.title} album album playlist`} className="shadow spotify-player" src={`https://open.spotify.com/embed/album/${spotifyData.id}`} allowtransparency="true" allow="encrypted-media"></iframe> */}
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
