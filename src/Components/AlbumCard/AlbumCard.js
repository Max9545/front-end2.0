import './AlbumCard.css'

function AlbumCard({ coverImage, title, name, year, genres }) {


  const displayGenres = (list) => {
   return list.map(genre => <p className='genre' data-cy='genre'>{genre}</p>)
  }


  return (
    <>
      <img className='cover' data-cy='cover'src={coverImage}/>
      <h2 className='title' data-cy='title'>{title}</h2>
      <h3 className='artist' dat-cy='artist'>{name}</h3>
      <p className='date' data-cy='date'>{year}</p>
      {displayGenres(genres)}
    </>
  )
}

export default AlbumCard