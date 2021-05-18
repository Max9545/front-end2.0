import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import { useState } from 'react';

const Search = () => {
  const [userQuery, setUserQuery] = useState('');

  return (
    <form className="search">
      <SearchIcon />
      <input
        id="searchField"
        className="search__input"
        placeholder="Search ..."
        defaultValue=""
        list="albumTitles"
        />
        <datalist id="ablumTitles">
          {  }
        </datalist>
    </form>
  )
}

export default Search;