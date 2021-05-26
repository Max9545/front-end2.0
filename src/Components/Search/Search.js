import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';

const ALBUM_TITLES = gql`
  query GetAlbumTitles {
    album(title: "The Payback") {
      title
    }
  }
`



const Search = ({ setSearchArtist }) => {

  const history = useHistory()
  const [userQuery, setUserQuery] = useState('');
  const [type, setType] = useState('artist');


  const determineSearchType = (event) => {

    if(type === 'artist') {
      event.preventDefault()
      setSearchArtist(userQuery)
      history.push(`/`) 
    } 
  
    if (type === 'album') {
      event.preventDefault()
      history.push(`/${userQuery}`)
    }
  }

  return (
    <form className="search" data-cy='search'>
      <SearchIcon />
      <input
        id="searchField"
        className="search__input"
        placeholder="Search ..."
        defaultValue=""
        list="albumTitles"
        onChange={(e) => setUserQuery(e.target.value)}
        />
        <datalist id="albumTitles">
        </datalist>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option selected value="artist">Artist</option>
          <option value="album">Album</option>
        </select>
        <button onClick={(e) => determineSearchType(e, type)}
        data-cy='search-submit'>Search</button>
    </form>
  )
}

export default Search;