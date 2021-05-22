export const displayGenres = (list) => {
  return list.map(genre => <p className='card_genre' data-cy='card_genre'>{genre}</p>)
}