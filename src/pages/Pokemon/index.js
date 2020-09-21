import React from "react";
import {useRouteMatch} from 'react-router-dom';

const Pokemon = () => {
  const {params} = useRouteMatch();

  return <h1>Pokémon {params.pokemonName}</h1>
}

export default Pokemon;

