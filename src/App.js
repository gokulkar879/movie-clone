import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Movie from './Movie';


function App() {
  return (
    <Router>
     
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies/:id">
        <Movie />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
