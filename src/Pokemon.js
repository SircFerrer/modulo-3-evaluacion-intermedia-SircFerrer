import React from "react";
import PokemonStyle from "./Pokemon.css";
function Pokemon(props) {
  console.log(props);
  const types = props.pokemon.types;
  return (
    <li className="ListaPokemon">
      <img src={props.pokemon.url} alt="imagen pokemon"></img>
      <h2>{props.pokemon.name}</h2>
      <p>Tipos: </p>

      <ul className="ListaTypes">
        {types.map((type, index) => {
          return (
            <li className="Types" key={index}>
              {type}
            </li>
          );
        })}
      </ul>
    </li>
  );
}
export default Pokemon;
