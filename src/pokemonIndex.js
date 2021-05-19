import React from 'react';
import ReactDOM from 'react-dom';
import App from "./pages/pokemon/App.js";
// redux and router
import Store from './pages/pokemon/Store.js'
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Provider store={Store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
)
