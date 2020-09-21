import React from "react";
import { Switch, Route } from "react-router-dom"

import Pokedex from "../pages/Pokedex";
import Pokemon from "../pages/Pokemon";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Pokedex}/>
    <Route path="/pokemon/:pokemonName+" component={Pokemon}/>
  </Switch>
)

export default Routes;
