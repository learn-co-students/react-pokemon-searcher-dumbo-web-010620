import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const pokedexToComponents = this.props.pokedex.map(pokemon => 
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    )

    return (
      <Card.Group itemsPerRow={6}>
        {pokedexToComponents}
      </Card.Group>
    )
  }
}

export default PokemonCollection
