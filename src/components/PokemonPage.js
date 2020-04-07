import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokedex: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemonArray => this.setState({pokedex: pokemonArray}))
  }

  setSearchTerm = (updatedSearchTerm) => {
    this.setState({searchTerm: updatedSearchTerm})
  }

  filteredPokedex = () => {
    let newPokedex = this.state.pokedex.filter(pokemonObj => pokemonObj.name.includes(this.state.searchTerm) )
    return newPokedex
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search 
          setSearchTerm={this.setSearchTerm} 
          searchTerm={this.state.searchTerm}
          // filteredPokedex={this.filteredPokedex}
        />
        <br />
        <PokemonCollection pokedex={this.filteredPokedex()} />
      </Container>
    )
  }
}

export default PokemonPage
