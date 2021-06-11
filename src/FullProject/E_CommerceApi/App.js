import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// BootStrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom CSS
import './App.css';

// Components
import Header from './components/Header.js';
import HomePage from './components/HomePage.js';
import Product from './components/Product.js';
import Store from './Store.js';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/:id' component={Product} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
