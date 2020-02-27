import { Switch, Route } from "react-router-dom";
import React from 'react';
import HomePage from './pages/HomePage';
import DiscoverMobiesPage from './pages/DiscoverMoviesPage'
import AboutPage from './pages/AboutPage';
import NavBar from './components/NavBar';
import '../src/style/App.css'
import MoviePage from '../src/components/MoviePage'

function App() {
  return (
    <div className="App">
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
        integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
        crossorigin='anonymous'
      />
      <div className="App-header">
      <NavBar />
      <Switch>
        <Route path="/movie/:imdb_id" component={MoviePage} />
        <Route path="/discover" component={DiscoverMobiesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
