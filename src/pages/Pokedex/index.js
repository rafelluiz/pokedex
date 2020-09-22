import React, {useEffect,useState} from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';

import {Title, ListPokemon} from './styles'

const Pokedex = () => {
  const offSet = 0;
  const limit = 500;

  const sourceImageBig = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  const [ listPokemon, setPokemon ] = useState([]);

  useEffect(() => {
    api.get(`?offset=${offSet}&limit=${limit}`)
      .then((response) => {
        //console.log(response.data)
        setPokemon(response.data.results)
      });
  },[offSet, limit]);

  listPokemon.map(pokemon =>(
    console.log(pokemon)
  ));



  return (

    <>
      <Title>Pokédex</Title>
      <ListPokemon>
        {listPokemon.map( pokemon => (

          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            <img
              src={sourceImageBig+pokemon.url.replace(/.*on\/(.*)\/.*/, '$1')+".svg"}

              alt={pokemon.name}
            />
            <strong>{pokemon.name}</strong>
          </Link>
        ))}


      </ListPokemon>
    </>
  );
}

export default Pokedex;

