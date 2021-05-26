import '../AlbumCard/AlbumCard.css'
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import { useQuery } from '@apollo/client';
import { GET_ALBUMS_BY_ARTIST }from '../../queries';

function FavoriteAlbumsDisplay ({ favorites }) {


  const renderGivenAlbums = (list) => {
    console.log(list)
    return list.map(title => {
      return <FavoriteCard  title={title}/>
    })
  }

  return (
      <div className='card-container' data-cy='card-container'>
        {renderGivenAlbums(favorites) }
      </div>
  )
}

export default FavoriteAlbumsDisplay