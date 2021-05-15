import './AlbumCard.css'

function AlbumCard({ album }) {


  const displayGenres = (list) => {
   return list.map(genre => <p>{genre}</p>)
  }


  return (
    <>
      <img src={album.coverImage}/>
      <h2>{album.artists.name}</h2>
      <h3>{album.title}</h3>
      <p>{album.year}</p>
      {displayGenres(album.genres)}
    </>
  )
}

export default AlbumCard