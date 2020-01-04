import React from "react";
import propTypes from "prop-types";
import PokemonStyle from "../style/Pokemon.css";
function Pokemon(props) {
  console.log(props);
  const types = props.pokemon.types;
  return (
    <li className="ListaPokemon">
      <img src={props.pokemon.url} alt={props.pokemon.name}></img>
      <h2>{props.pokemon.name}</h2>

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

Pokemon.propTypes = {
  name: propTypes.string,
  types: propTypes.string
};

export default Pokemon;
