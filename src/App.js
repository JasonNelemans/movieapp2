import { Switch, Route } from "react-router-dom";
import React from 'react';
import HomePage from './pages/HomePage';
import DiscoverMoviesPage from './pages/DiscoverMoviesPage'
import AboutPage from './pages/AboutPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
