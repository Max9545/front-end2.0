import { useEffect, useState } from 'react'
import './AlbumCardsDisplay.css'
import AlbumCard from '../AlbumCard/AlbumCard';
import { useQuery, gql}  from '@apollo/client'

const GET_ALBUMS = gql`
  query {
    album(title: "Freak Out") {
      id
          title
          artists {
              name
          }
          year
          genres
          coverImage
  }
}
`


function AlbumCardsDisplay (title) {

  const { loading, error, data } = useQuery(GET_ALBUMS, {
    variables: { title }
  })
  
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

console.log(data)
  
  
//  const [currentAlbums, setCurrentAlbums] = useState([])

//   useEffect(() => {
//     setCurrentAlbums(albums)
//   }, [albums])

  // const currentAlbumsDisplay = () => {
  //  return data.map(({ coverImage, title, artists, year, genres }) => {
  //    return <AlbumCard 
  //             coverImage={coverImage}
  //             title={title}
  //             name={artists.name}
  //             year={year}
  //             genres={genres}
  //    />
  //  })
  // }

  return (
    <div className='card-container' data-cy='card-container'>
      <h2>Albums</h2>
      {/* {currentAlbums && currentAlbumsDisplay()} */}
      {/* {data && currentAlbumsDisplay()} */}
      {<AlbumCard 
              coverImage={data.album.coverImage}
              title={data.album.title}
              name={data.album.artists[0].name}
              year={data.album.year}
              genres={data.album.genres}
     />}
    </div>
  )
}

export default AlbumCardsDisplay
