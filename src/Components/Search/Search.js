import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import { useState } from 'react';

const ALBUM_TITLES = gql`
  query GetAlbumTitles {
    album(title: "The Payback") {
      title
    }
  }
`

const Search = ({ setSearch, setSearchArtist }) => {

  const [userQuery, setUserQuery] = useState('');

  const helpSetSearch = (event, type) => {

    if(type === 'artist') {
      event.preventDefault()
      setSearchArtist(userQuery)
    } else {
      event.preventDefault()
      setSearch([userQuery])
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
          {/* { determineOptionStatus() } */}
        </datalist>
        <button onClick={(e) => helpSetSearch(e, 'artist')}
        data-cy='search-submit'>Search</button>
    </form>
  )
}

export default Search;