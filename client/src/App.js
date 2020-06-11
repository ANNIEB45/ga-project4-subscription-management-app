import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import SingleSubscription from './components/SingleSubscription'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/subscription/:subscriptionId' component={SingleSubscription} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
