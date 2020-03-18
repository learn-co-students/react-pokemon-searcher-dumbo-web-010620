import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends Component {

  arrayComponents = () => {
    let arrayOfPokemon = this.props.pokemonArray.map( pokemon => {
      return <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
    }) 
    
    return arrayOfPokemon
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.arrayComponents()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
