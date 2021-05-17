import AlbumCard from '../AlbumCard/AlbumCard';
import AlbumCardsDisplay from '../AlbumCardsDisplay/AlbumCardsDisplay'
import Navigation from './Navigation';
import { Switch, Route } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      <header>Future Header / Branding mark</header>
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
