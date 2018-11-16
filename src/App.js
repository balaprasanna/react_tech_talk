import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import HeroListing from './components/heroListing'
import HeroDetails from "./components/heroDetails";

import { BrowserRouter as Router , Route, Switch, Redirect } from 'react-router-dom'
import AppHeader from './components/header';

class Home extends Component {
  render() {
    return (
      <div className="App1">
          <AppHeader title="Marvel Heros" />
          <HeroListing > </HeroListing>
      </div>
    );
  }
}

class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component ={ Home} />
          <Route exact path="/home" component ={ Home} />
          <Route exact path="/hero/:id" component ={ HeroDetails } />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    )
  }
}

export default App;
