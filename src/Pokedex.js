import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      position: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }

getPosition() {
  return (this.state.position >= pokemons.length - 1 ? this.state.position = 0 : this.state.position += 1);
}

handleChange(event) {
  this.setState({
    position: this.getPosition(),
  })

}

  render() {
    return (
      <div className="pokedex">
        {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)[this.state.position]}
        
        <button onClick={this.handleChange}>Próximo Pokemon</button>
        <button onClick={this.handleChange}>Fire</button>
        <button onClick={this.handleChange}>Psychic</button>
      </div>

    );
  }
}

export default Pokedex;