import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = (props) => {

 let arrayOfPokemons = props.pokemons.map( (pokemon) => {
  return <PokemonCard key={pokemon.id}
  pokemon = {pokemon} />
})


  
    // console.log(props.pokemons)
    return (
      
      <Card.Group itemsPerRow={6}>
        {arrayOfPokemons}
        <h1>Hello From Pokemon Collection</h1>
      </Card.Group>
    )
  }


export default PokemonCollection
