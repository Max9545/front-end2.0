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
            <p>Card Container</p>
          </Route>
          <Route path="/liked">
            <p>Eventual liked album cards Container</p>
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
