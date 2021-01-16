import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';
import Intro from './components/Intro';

const App = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Intro {...props} />} />
    <Route exact path="/pokedexNat" render={(props) => <Pokedex {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    />
  </Switch>
);

export default App;

