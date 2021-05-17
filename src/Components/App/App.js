import AlbumCard from '../AlbumCard/AlbumCard';
import AlbumCardsDisplay from '../AlbumCardsDisplay/AlbumCardsDisplay'
import Navigation from './Navigation';
import { Switch, Route } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import { useState } from 'react';


function App() {
  const [screen, setScreen] = useState(window.innerWidth());

  return (
    <div className="App">
      <header>
        <h1>Selector</h1>
        <p>Current screen size {}</p>
      </header>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <section className="glass">
              <p>Card Container</p>
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
