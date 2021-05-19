import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const ALBUM_TITLES = gql`
  query GetAlbumTitles {
    album(title: "The Payback") {
      title
    }
  }
`

const Search = ({ setSearch }) => {

  const [userQuery, setUserQuery] = useState('');
  const { loading, error, data } = useQuery(ALBUM_TITLES);

  // const determineOptionStatus = () => {

  //   if (loading) return <option value="Loading options..." />
  //   if (error) return <option value="Problem loading options!" />

  //   return data.map(title => {
  //     return <option value={ title } />
  //   })
  // }

  const helpSetSearch = (event) => {
    event.preventDefault()
    setSearch([userQuery])
  }

  return (
    <form className="search">
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
        <button onClick={(e) => helpSetSearch(e)}>Search</button>
    </form>
  )
}

export default Search;