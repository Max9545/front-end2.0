export const displayGenres = (list) => {
  return list.map(genre => <p className='genre' data-cy='genre'>{genre}</p>)
}