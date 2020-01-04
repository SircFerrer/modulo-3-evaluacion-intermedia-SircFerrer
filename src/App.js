import React from "react";
import "./style/App.css";
import apiData from "./Api/data.json";
import PokeList from "./components/PokeList";
import Pokemon from "./components/Pokemon";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: apiData };
  }

  render() {
    return (
      <div className="App">
        <h1 className="Title">Mi lista de pokemon</h1>
        <PokeList>
          {this.state.pokemons.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon} />;
          })}
        </PokeList>
      </div>
    );
  }
}

export default App;
