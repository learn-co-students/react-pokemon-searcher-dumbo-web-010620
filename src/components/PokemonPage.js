import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import Filter from './Filter'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokedex: [],
    searchTerm: "",
    alphabetized: false
  }

  childControlsAlphabetized = () => {
    this.setState({alphabetized: !this.state.alphabetized})
  }

  alphabetizedPokedex = (pokedex) => {
    if (this.state.alphabetized) {
      let pokedexCopy = [...pokedex]
      return pokedexCopy.sort((a,b) => a.name.localeCompare(b.name))
    }
    else return pokedex
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemonArray => this.setState({pokedex: pokemonArray}))
  }

  setSearchTerm = (updatedSearchTerm) => {
    this.setState({searchTerm: updatedSearchTerm})
  }

  // bad naming, this is for search function
  filteredPokedex = (pokedex) => {
    let newPokedex = pokedex.filter(pokemonObj => pokemonObj.name.includes(this.state.searchTerm) )
    return newPokedex
  }

  addOnePokemon = (pokemon) => {
    let configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(pokemon)
    }

    fetch("http://localhost:3000/pokemon", configObj)
    .then(r => r.json())
    .then(pokemon => {
      let newPokemonArray = [...this.state.pokedex, pokemon]
      this.setState({pokedex: newPokemonArray})
    })

    // console.log(pokemon)
    // send post fetch
    // get response back
    // reassign state
  }

  render() {
    // console.log(this.alphabetizedPokedex(this.state.pokedex))
    let filtered = this.filteredPokedex(this.state.pokedex)
    let alphabetized = this.alphabetizedPokedex(filtered)

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addOnePokemon={this.addOnePokemon} />
        <br />
        <Search 
          setSearchTerm={this.setSearchTerm} 
          searchTerm={this.state.searchTerm}
          // filteredPokedex={this.filteredPokedex}
        />
        <br />
        <Filter 
          alphabetized={this.state.alphabetized} 
          childControlsAlphabetized={this.childControlsAlphabetized}
        />
        <br />
        <br />
        <PokemonCollection pokedex={alphabetized} />
      </Container>
    )
  }
}

export default PokemonPage
