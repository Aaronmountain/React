import React from 'react'
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./component/PokemonList.js";
import Pokemon from "./component/Pokemon.js";

import './App.css'

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to='/'>Home</NavLink>
      </nav>
      <Switch>
        <Route path='/' exact component={PokemonList} />
        <Route path='/pokemon/:pokemon' component={Pokemon} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default App
