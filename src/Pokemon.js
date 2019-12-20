import React from "react";
function Pokemon(props) {
  console.log(props);
  const types = props.pokemon.types;
  return (
    <li>
      <img src={props.pokemon.url} alt="imagen pokemon"></img>
      <h2>{props.pokemon.name}</h2>
      <p>Tipos: </p>

      <ul>
        {types.map((type, index) => {
          return <li key={index}>{type}</li>;
        })}
      </ul>
    </li>
  );
}
export default Pokemon;
