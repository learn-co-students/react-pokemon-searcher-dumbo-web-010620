import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemons: [],
    searchTerm: ""
  }

  componentDidMount(){
     fetch("http://localhost:5000/pokemon")
      .then(r => r.json())
      .then((pokemonArray) => {
        console.log(pokemonArray)
        this.setState({
          pokemons: pokemonArray
        })
      })
  }
  
  handleSearchTerm = (string) => {
    this.setState({
      searchTerm: string
    })
  }

  addOnePokemon = (pokemonOBJ) => {
    let pokemonFormat = {
      name: pokemonOBJ.name,
      sprites: {
        front: pokemonOBJ.frontUrl,
        back: pokemonOBJ.backUrl
      },  
      stats: [{name: "hp", value: pokemonOBJ}]
    }

    fetch("http://localhost:5000/pokemon", {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(pokemonFormat) 
    })
    .then(r => r.json())
    .then(newPokemonArray => {
        let newArray = [...this.state.pokemon, newPokemonArray]
        this.setState({
          pokemon: newArray
        })
    })
  }

  render() {
    let filteredArray = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.searchTerm)
    })
    return (
      
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addOnePokemon={this.addOnePokemon}/>
        <br />
        <Search searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />
        <br />
        <PokemonCollection pokemons={filteredArray}/>
      </Container>
    )
  }
}

export default PokemonPage
