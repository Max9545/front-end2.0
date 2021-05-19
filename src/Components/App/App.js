import AlbumCardsDisplay from '../AlbumCardsDisplay/AlbumCardsDisplay'
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import DetailsModal from '../Details/Details.js';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import '../../normalize.css';

function App() {
  const [titles, setTitles] = useState(["The Payback"]);
  const [liked, setLiked] = useState([]);

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 780px)'
  });

  return (
    <div className="App">
      <header>
        <h1 className="header__h1">Selector</h1>
        <Search />
      </header>
      <Navigation isMobile={ isTabletOrMobile }/>
      {/* <DetailsModal /> */}
      <main>
        <Switch>
          <Route exact path="/">
            <section className="glass">
              <AlbumCardsDisplay titles={ titles }/>
            </section>
          </Route>
          <Route path="/liked">
            <section className="glass">
              <p>Eventual liked album cards Container</p>
            </section>
          </Route>
          <Route path="*">
            <h1>This page doesn't exist! Please navigate back to home with the sidebar</h1>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
