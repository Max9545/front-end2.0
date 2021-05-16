import React from 'react'
import './Details.css';
import '../Details/assets/discogs_logo.svg'
import albums from '../../mockData';
import DiscogsLogo from '../Details/assets/discogs_logo.svg';
// import { ReactComponent as DiscogsLogo }  from '../Details/assets/discogs_logo.svg'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';

const DetailsModal = () => {
  const discogsLink = 'https://www.discogs.com/James-Brown-The-Payback/master/33990';
  
  return (
    <div className="modal-container">
      <section className="modal">
        <article className="box left">
          <img className="album-cover shadow" src={albums[0].coverImage} alt=""/>
          <div className="links">
            <FavoriteBorderIcon className="click"/>
            <a href={discogsLink} target="_blnk"></a>
            <img className="discogsLogo" src={DiscogsLogo}/>
          </div>
          <div className="modal-text">
            <p>{albums[0].artists.name}</p>
            <p>{albums[0].title}</p>
            <p>Released: {albums[0].year}</p>
          </div>
        </article>
        <article className="box right">
          <iframe className="shadow" src="https://open.spotify.com/embed/album/49vpRrUcAr2bj6aYQr0Cfl" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          {/* <div>Spotify Playlist</div> */}
        </article>
      </section>
      <div className="close-container">
        <CloseIcon className="close-icon click"/>
      </div>
    </div>
  )
}

export default DetailsModal;