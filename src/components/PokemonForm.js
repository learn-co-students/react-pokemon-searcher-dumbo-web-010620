import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      stats:{value: '',
       name: 'hp'},
      sprites:[{
        front:'',
        back: ''
      }]}
    
  }

  handleSubmit=event=>{
    this.props.addPokemon(this.state)
  }

  nameInput=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }

  statsInput=event=>{
    this.setState({
      stats: [{
        value: event.target.value,
        name: 'hp'}]
    })
  }
  

  frontInput=(event)=>{
    this.setState({
      sprites: {
        front: event.target.value,
        back: this.state.sprites.back}
    })
  }
  backInput=event=>{
    this.setState({
      sprites: {
        front: this.state.sprites.front,
        back: event.target.value}
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={event=>this.nameInput(event)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={event=>this.statsInput(event)}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={event=>this.frontInput(event)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={event=>this.backInput(event)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
