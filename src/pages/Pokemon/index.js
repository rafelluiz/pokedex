import React,{useEffect,useState} from "react";
import api from "../../services/api";
import {useRouteMatch,Link} from 'react-router-dom';

const Pokemon = () => {
  const {params} = useRouteMatch();
  const imageBackDefault = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/";
  const imageFrontDefatul = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";


  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonInformation, setPokemonInformation ] = useState([]);
  const [pokemonStats, setPokemonStats ] = useState([]);
  const [pokemonTypes, setPokemonTypes ] = useState([]);


  useEffect( () =>{
    api.get(`${params.pokemonName}`)
      .then((response) => {
        setPokemonInformation(response.data);
        setPokemonAbilities(response.data.abilities);
        setPokemonStats(response.data.stats);
        setPokemonTypes(response.data.types);
      });
  },[params.pokemonName]);



  return (
    <>
      <Link to={'/'}>
        Voltar
      </Link>
      <h1>Name:</h1>
      <h3>{pokemonInformation.name}</h3>
      <h1>Images</h1>
      <p>Front</p>
      <img
        src={imageFrontDefatul+pokemonInformation.id+".png"}
        alt="Front"
      />
      <p>Back</p>
      <img
        src={imageBackDefault+pokemonInformation.id+".png"}
        alt="Front"
      />
      <h1>Weight</h1>
      {pokemonInformation.weight/10} kg
      <h1>Height</h1>
      {pokemonInformation.height*10} cm
      <h1>Stats</h1>
      {pokemonStats.map( (item,index) => (
          <h3 key={index}> {item.stat.name}: {item.base_stat}  </h3>
        )
      )}
      <h1>Abilities:</h1>
      {pokemonAbilities.map( (item,index) => (
        <h3 key={index}> {item.ability.name} </h3>
        )
      )}
      <h1>Types:</h1>
      {pokemonTypes.map( (item,index) => (
          <h3 key={index}> {item.type.name} </h3>
        )
      )}
    </>
  )
}

export default Pokemon;

