import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ""
  }

  API = "http://localhost:3000/pokemon"

  componentDidMount = () => {
    fetch(this.API)
      .then(r => r.json())
      .then(results => {
        this.setState({
          pokemons: results
        })
      })
  }

  handleSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
  }

  addPokemon = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }

  renderArray = () => {
    let filteredArray = this.state.pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredArray
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search handleSearchTerm={this.handleSearchTerm} searchTerm={this.state.searchTerm}/>
        <br />
        <PokemonCollection 
          pokemons={this.renderArray()}
        />
      </Container>
    )
  }
}

export default PokemonPage
