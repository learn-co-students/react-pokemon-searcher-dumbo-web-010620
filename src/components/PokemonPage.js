import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

// http://localhost:3000/pokemon is the URL for the json data
// pokemon sprites here ->  https://pokemondb.net/sprites

class PokemonPage extends React.Component {


  state= {
    pokemon: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then( r => r.json() )
      .then( pokemonArray => {
        this.setState({
          pokemon: pokemonArray
        })
      })
  }

  changeSearchTerm = (term) => {

    this.setState({
      searchTerm: term
    })
  }

  specificPokemon = () => {
    let { pokemon, searchTerm } = this.state
    let filterArray = pokemon.filter( poke => {
      return poke.name.includes(searchTerm)
    })

    return filterArray
  }


  addOnePokemon = pokemonObj => {
    let formattedPokemon = {
      name: pokemonObj.name,
      sprites: {
        front: pokemonObj.frontUrl,
        back: pokemonObj.backUrl
      },
      stats: [{name:"hp", value: pokemonObj.hp}]
    }


    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify( formattedPokemon )
    })
      .then( r  => r.json())
      .then( newPokemon => {
        let newArray = [...this.state.pokemon, newPokemon]
        this.setState({
          pokemon: newArray
        })
      })

    console.log(formattedPokemon)
  }

  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addOnePokemon={ this.addOnePokemon } />
        <br />
        <Search 
          changeSearchTerm={ this.changeSearchTerm }
          pokemonSearchTerm={ this.state.searchTerm }  
        />
        <br />
        <PokemonCollection pokemonArray={ this.specificPokemon() }  />
      </Container>
    )
  }
}

export default PokemonPage
