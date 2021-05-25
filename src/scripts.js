export const displayGenres = (list) => {
  return list.map((genre, i) => <p className='card_genre' data-cy='card_genre' key={`${genre}-${i}`}>{genre}</p>)
}