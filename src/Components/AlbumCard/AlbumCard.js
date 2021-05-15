import './AlbumCard.css'

function AlbumCard({ album }) {





  return (
    <>
      <img src={album.coverImage}/>
      <h2>{album.artists.name}</h2>
      <h3>{album.title}</h3>
    </>
  )
}

export default AlbumCard