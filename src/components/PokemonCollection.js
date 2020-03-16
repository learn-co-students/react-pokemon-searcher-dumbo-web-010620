import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  pokemonMap=()=>{
    
     return this.props.filteredData.map(pokemon => (
       <PokemonCard key={pokemon.name} id={pokemon.id} name={pokemon.name}
        spriteFront={pokemon.sprites.front} spriteBack={pokemon.sprites.back}
         stats={pokemon.stats} flipCard={this.props.flipCard} face={pokemon.face}
         delete={this.props.delete}/>
     ))
    
  }
  
  
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.pokemonMap()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
