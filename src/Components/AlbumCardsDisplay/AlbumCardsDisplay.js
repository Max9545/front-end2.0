import { useEffect, useState } from 'react'
import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';
import { useQuery } from '@apollo/client';

function AlbumCardsDisplay ({ titles }) {

  const { loading, error, data } = useQuery(GET_RANDOM_ALBUMS)

  if (loading) return 'Loading..'
  if (error) return 'Error! '

  const [randomAlbums, setRandomeAlbums] = useState([])

  useEffect(() => {
    setRandomeAlbums(data)
  })

  const renderGivenAlbums = (titles) => {
    return titles.map(title => {
      return <AlbumCard title={ title } />
    })
  }

  return (
    <div className='card-container' data-cy='card-container'>
      <h2>Albums</h2>
        {!randomAlbums && renderGivenAlbums(titles) }
        {randomAlbums && renderGivenAlbums(randomAlbums)}
    </div>
  )
}

export default AlbumCardsDisplay