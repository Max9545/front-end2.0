import AlbumCard from '../AlbumCard/AlbumCard';
import AlbumCardsDisplay from '../AlbumCardsDisplay/AlbumCardsDisplay'
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import DetailsModal from '../Details/Details.js';
import { Switch, Route } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import '../../normalize.css';
import albums from '../../mockData';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';


function App() {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 780px)'
  });

  return (
    <div className="App">
      <header>
        <h1>Selector</h1>
        <Search />
      </header>
      <Navigation isMobile={ isTabletOrMobile }/>
      {/* <DetailsModal /> */}
      <main>
        <Switch>
          <Route exact path="/">
            <section className="glass">
              <AlbumCardsDisplay 
                albums={ albums }
              />
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
