import React from 'react'
import './Details.css';
import '../Details/assets/discogs_logo.svg'
import albums from '../../mockData';
import discogsLogo from '../Details/assets/discogs_logo.svg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import { Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useQuery, gql } from '@apollo/client';

const ALBUMS = gql`
  query {
    album(title: "The Payback") {
      id
        title
        artists {
          name
        }
        year
        genres
        coverImage
    }
  }`;

  // const SPOTIFY = gql`
  // query {
  //  
  // }`

const DetailsModal = () => {
  const discogsLink = 'https://www.discogs.com/James-Brown-The-Payback/master/33990';
  const { loading, error, data } = useQuery(ALBUMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data)
  
  return (
    <div className="modal-container">
      <section className="modal">
        <article className="box left">
          <img className="album-cover shadow" src={data.album.coverImage} alt={`${data.album.title} album cover`}/>
          <div className="links">
          <Tooltip title="Add to Favorites" placement="right">
            <FavoriteBorderIcon aria-label={"Add to Favorites"} className="favorite-button click"/>
          </Tooltip>
            <div className="discogs-link-details">
              <a href={discogsLink} target="_blnk"><img className="discogs-logo" src={discogsLogo} alt="discogs logo"/></a>
            </div>
          </div>
          <div className="modal-text">
            <p>{data.album.artists[0].name}</p>
            <p>{data.album.title}</p>
            <p>Released: {data.album.year}</p>
          </div>
        </article>
        <article className="box right">
          <iframe title={`${data.album.title} album album playlist`} className="shadow" src="https://open.spotify.com/embed/album/49vpRrUcAr2bj6aYQr0Cfl" allowtransparency="true" allow="encrypted-media"></iframe>
        </article>
      </section>
      <div className="close-container">
        <Tooltip title="Close">
          <CloseIcon aria-label={"close modal"} className="close-icon click"/>
        </Tooltip>
      </div>
    </div>
  )
}

export default DetailsModal;