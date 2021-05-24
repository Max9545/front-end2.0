import AlbumCardsDisplay from '../AlbumCardsDisplay/AlbumCardsDisplay'
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import DetailsModal from '../Details/Details.js';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Tooltip } from '@material-ui/core';
import './App.css';
import '../../normalize.css';

function App() {
  const [titles, setTitles] = useState(["The Payback"]);
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
      return (
      <Tooltip title="Remove from Favorites" placement="left">
        <FavoriteIcon fontSize="large" />
      </Tooltip>
      )
    }
    return (
      <Tooltip title="Add to Favorites" placement="left">
        <FavoriteBorderIcon fontSize="large" />
      </Tooltip>
    )
  }

  const isFavorite = (title) => {
    return favorites.includes(title);
  }

  const toggleFav = (title) => {
    if (isFavorite(title)) {
      return removeFavorite(title);
    }
    return addFavorite(title);
  }

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 780px)'
  });

  return (
    <div className="App">
      <header>
        <h1 className="header__h1">Selector</h1>
        <Search
          setTitles={ setTitles }
        />
      </header>
      <Navigation isMobile={ isTabletOrMobile }/>
      <main>
        <Switch>
          <Route exact path="/">
            <section className="glass">
            <AlbumCardsDisplay
              titles={ titles }
              favorites={ favorites }
              toggleFav={ toggleFav }
              determineFav={ determineFav }
              isFavorite={ isFavorite }
            />
            </section>
          </Route>
          <Route exact path="/your-favorites">
            <section className="glass">
              <AlbumCardsDisplay
                titles={ favorites }
                favorites={ favorites }
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
          }} />
          <Route path="*">
            <h1>This page doesn't exist! Please navigate back to home with the sidebar</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
