import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  render() {

    let arrayOfComponents = this.props.pokemons.map((pokemonPOJO) => {
      return <PokemonCard key={pokemonPOJO.name} pokemon={pokemonPOJO}/>
    })

    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        { arrayOfComponents }
      </Card.Group>
    )
  }
}

export default PokemonCollection
