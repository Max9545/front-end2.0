import React from 'react'
import './Details.css';
import './assets/X_button.svg'
import albums from '../../mockData';

const DetailsModal = () => {
  const discogsLink = 'https://www.discogs.com/James-Brown-The-Payback/master/33990';
  
  return (
    <div className="modal-container">
      <section className="modal">
        {/* <img src='./assets/X_button.svg' alt='Exit Detials' /> */}
        <article className="box left">
          <img className="album-cover" src={albums[0].coverImage} alt=""/>
          <a href={discogsLink} target="_blank">Purchase on Discogs</a>
          <div className="modal-text">
            <p>{albums[0].artists.name}</p>
            <p>{albums[0].title}</p>
            <p>Released: {albums[0].year}</p>
          </div>
        </article>
        <article className="box right">
          <iframe src="https://open.spotify.com/embed/album/49vpRrUcAr2bj6aYQr0Cfl" width="380" height="490" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          {/* <div>Spotify Playlist</div> */}
        </article>
      </section>
    </div>
  )
}

export default DetailsModal;