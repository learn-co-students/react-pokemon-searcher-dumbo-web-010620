import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {
state={
  pokemons: [],
  filtered: [],
  search: ""
  
}
  async componentDidMount(){
    let resp = await fetch(API)
    let pokemonArray = await resp.json()
    this.setState({pokemons: pokemonArray, filtered: pokemonArray})  
  }

  flipCard=(card)=>{
    let updatedArray
    let {pokemons} = this.state
    
    if(card.face === 'front'){
      updatedArray = pokemons.map(pokemon => {
        if(pokemon.id === card.id){
          return {
            ...pokemon,
            face:'back'}
          }
          else{return pokemon}
        })
        return this.setState({filtered: updatedArray})
        
      }
    else{
      updatedArray = pokemons.map(pokemon => {
        if(pokemon.id === card.id){
          return {
            ...pokemon,
            face:'front'}
          }
          else{return pokemon}
        })
        return this.setState({filtered: updatedArray})
      }
    }

     onChange= async (event)=>{
      await this.setState({search:event.target.value})
      this.filteredPokemon()
    }

    filteredPokemon=()=>{
      let {pokemons} = this.state
      let filteredPoke = []
      let searchInput = this.state.search
    
      filteredPoke = pokemons.filter(pokemon => {
        if(pokemon.name.includes(searchInput) === true){
          return pokemon
        }
      })
      console.log(filteredPoke)
      this.setState({filtered: filteredPoke})
    }

    addPokemon=(newPoke)=>{
      let newPokemonArr = this.state.pokemons

      fetch(API,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newPoke)
      })
      .then(resp => resp.json())
      .then(pokeObj => {newPoke.id = pokeObj.id

      newPokemonArr.push(newPoke)
      this.setState({pokemons: newPokemonArr})

      }) 
    }

    removePoke=(desiredPoke)=>{
      let {pokemons} = this.state
      let updatedArray = pokemons.filter(pokeObj => {
        if(pokeObj.id !== desiredPoke.id){
          return pokeObj
        }
      })
     
      this.setState({
        filtered:updatedArray,
        pokemons:updatedArray
      })
      

    }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection pokemonData={this.state.pokemons} flipCard={this.flipCard}
         filteredData={this.state.filtered} delete={this.removePoke}/>
      </Container>
    )
  }
}

export default PokemonPage
