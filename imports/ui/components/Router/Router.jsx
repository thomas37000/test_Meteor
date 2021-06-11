import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './Nav/Nav';
i

export default function Routter(props) {
  const [display] = useState(false);
  function displayNav() {
    if (props) {
      return <Nav />;
    }
    // else 'username + token'
    return <NavRoute />;
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Connexion} />
        <Route path='/networks/' component={Slider} />
      </Switch>
    </Router>
  );
}
