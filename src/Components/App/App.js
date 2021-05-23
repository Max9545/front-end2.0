import AlbumCardsDisplay from '../AlbumCardsDisplay/AlbumCardsDisplay'
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import DetailsModal from '../Details/Details.js';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './App.css';
import '../../normalize.css';

function App() {
  const [titles, setTitles] = useState(["The Payback"]);
  const [search, setSearch] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (toAdd) => {
    if (favorites.includes(toAdd)) {
      return;
    }
    return setFavorites([...favorites, toAdd]);
  }

  const removeFavorite = (toRemove) => {
    return setFavorites(favorites.filter(title => title !== toRemove));
  }

  const determineFav = (isFav) => {
    if (isFav) {
      return <FavoriteIcon fontSize="large" />
    }
    return <FavoriteBorderIcon fontSize="large" />
  }

  const isFavorite = (title) => {
    if (favorites.includes(title)) {
      return true;
    }
    return false;
  }

  const toggleFav = (title) => {
    if (isFavorite(title)) {
      return removeFavorite(title);
    }
    return addFavorite(title);
  }

  const isLandingPage = () => {
    if (search.length) {
      return (
        <AlbumCardsDisplay
          titles={ search }
          toggleFav={ toggleFav }
          determineFav={ determineFav }
          isFavorite={ isFavorite }
        />
      )
    }
    return (
      <AlbumCardsDisplay
        titles={ titles }
        toggleFav={ toggleFav }
        determineFav={ determineFav }
        isFavorite={ isFavorite }
      />
    )
  }

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 780px)'
  });

  return (
    <div className="App">
      <header>
        <h1 className="header__h1">Selector</h1>
        <Search setSearch={setSearch} search={search}/>
      </header>
      <Navigation isMobile={ isTabletOrMobile }/>
      <main>
        <Switch>
          <Route exact path="/">
            <section className="glass">
              { isLandingPage() }
            </section>
          </Route>
          <Route exact path="/your-favorites">
            <section className="glass">
              <AlbumCardsDisplay
                titles={ favorites }
                toggleFav={ toggleFav }
                determineFav={ determineFav }
                isFavorite={ isFavorite }
              />
            </section>
          </Route>
          <Route exact path="/:title" render={({ match }) => {
            const { title } = match.params;
            return (
              <DetailsModal
                title={ title }
                toggleFav={ toggleFav }
                determineFav={ determineFav }
                isFavorite={ isFavorite }
              />
            )
            }
          }
          />
          <Route path="*">
            <h1>This page doesn't exist! Please navigate back to home with the sidebar</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
