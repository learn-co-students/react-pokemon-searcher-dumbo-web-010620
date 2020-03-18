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
  
  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          pokemons: pokemons
        })
      })
  }
  
changeSearch = (term) => {
  this.setState({
    searchTerm: term
  })
}

searchArray = () => {
  let filteredArray = this.state.pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  })
  return filteredArray
}

addPokemon = (info) => {
  fetch("http://localhost:3000/pokemon", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(info)
  })
  .then(res => res.json())
  .then(pokemon => {
    let array = [pokemon, ...this.state.pokemons]
    this.setState({
      pokemons: array
    })
  })
}


  render() {
    // console.log(this.state.pokemons)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
        addPokemon = {this.addPokemon}
        />
        <br />
        <Search 
        searchTerm={this.state.searchTerm}
        changeSearch={this.changeSearch}
        />
        <br />
        <PokemonCollection 
        pokemons={this.searchArray()}/>
      </Container>
    )
  }
}

export default PokemonPage
