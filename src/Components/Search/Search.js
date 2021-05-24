import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import { useState } from 'react';

const Search = ({ setTitles }) => {

  const [userQuery, setUserQuery] = useState('');

  const helpSetSearch = (event, type) => {

    if(type === 'artist') {
      event.preventDefault()
      setArtist(userQuery)
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