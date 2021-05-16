import './AlbumCard.css'

function AlbumCard({ coverImage, title, name, year, genres }) {

  const displayGenres = (list) => {
   return list.map(genre => <p className='genre' data-cy='genre'>{genre}</p>)
  }

  return (
    <div className='card'>
      <img className='cover' data-cy='cover'src={coverImage}/>
      <h2 className='title' data-cy='title'>{title}</h2>
      <h3 className='artist' dat-cy='artist'>{name}</h3>
      <p className='date' data-cy='date'>This Edition Released in {year}</p>
      <div className='genre-container' data-cy='genre-container'>
        {displayGenres(genres)}
      </div>
      <button className='discogs-link' data-cy='discogs-link'>Purchase on Discogs</button>
    </div>
  )
}

export default AlbumCard