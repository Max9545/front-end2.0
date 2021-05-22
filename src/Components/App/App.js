import AlbumCardsDisplay from '../AlbumCardsDisplay/AlbumCardsDisplay'
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import DetailsModal from '../Details/Details.js';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Dialog } from '@material-ui/core';
import './App.css';
import '../../normalize.css';

function App() {
  // const [titles, setTitles] = useState(["The Payback"]);
  const [titles, setTitles] = useState(["The Payback"]);
  const [search, setSearch] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (toAdd) => {
    if (favorites.includes(toAdd)) {
      return;
    }
    return setFavorites(favorites.push(toAdd));
  }

  const removeFavorite = (toRemove) => {
    return setFavorites([...favorites.filter(album => album.title !== toRemove)]);
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
              {search.length ? <AlbumCardsDisplay titles={ search } addFavorite={ addFavorite } removeFavorite={ removeFavorite }/> : <AlbumCardsDisplay  titles={ titles } addFavorite={ addFavorite } removeFavorite={ removeFavorite }/> }
            </section>
          </Route>
          <Route path="/liked">
            <section className="glass">
              <p>Eventual liked album cards Container</p>
            </section>
          </Route>
          <Route exact path="/:title" render={({ match }) => {
            const { title } = match.params;
            return <DetailsModal title={ title } addFavorite={ addFavorite } removeFavorite={ removeFavorite }/>
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
