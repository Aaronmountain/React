import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Header from './components/Header.js';
import './custom.css';
import { Global } from './styled.js';

const App = () => {
  return (
    <Router>
      <Global />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
