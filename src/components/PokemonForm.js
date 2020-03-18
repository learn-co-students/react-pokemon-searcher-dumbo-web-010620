import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: ''
      // hp: '',
      // sprites.front: '',
      // sprites.back: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPokemon(this.state)
  }

  handleAllInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }


  render() {
    let {name} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={this.handleAllInput} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
           
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl"  />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
