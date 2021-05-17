import React from 'react'
import './Details.css';
import '../Details/assets/discogs_logo.svg'
import albums from '../../mockData';
import discogsLogo from '../Details/assets/discogs_logo.svg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import { Tooltip } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const DetailsModal = () => {
  const discogsLink = 'https://www.discogs.com/James-Brown-The-Payback/master/33990';
  
  return (
    <div className="modal-container">
      <section className="modal">
        <article className="box left">
          <img className="album-cover shadow" src={albums[0].coverImage} alt={`${albums[0].title} album cover`}/>
          <div className="links">
          <Tooltip title="Add to Favorites" placement="right">
            <FavoriteBorderIcon aria-label={"Add to Favorites"} className="click"/>
          </Tooltip>
            <div className="discogs-link">
              <a href={discogsLink} target="_blnk"/>
              <img className="discogs-logo" src={discogsLogo} alt="discogs logo"/>
            </div>
          </div>
          <div className="modal-text">
            <p>{albums[0].artists.name}</p>
            <p>{albums[0].title}</p>
            <p>Released: {albums[0].year}</p>
          </div>
        </article>
        <article className="box right">
          <iframe title={`${albums[0].title} album album playlist`} className="shadow" src="https://open.spotify.com/embed/album/49vpRrUcAr2bj6aYQr0Cfl" allowtransparency="true" allow="encrypted-media"></iframe>
        </article>
      </section>
      <div className="glass"></div>
      <div className="close-container">
        <Tooltip title="Close">
          <CloseIcon aria-label={"close modal"} className="close-icon click"/>
        </Tooltip>
      </div>
    </div>
  )
}

export default DetailsModal;