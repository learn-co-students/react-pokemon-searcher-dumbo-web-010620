import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = () => {
    let newPokemonPOJO = {
      "height": null,
      "weight": null,
      "id": null,
      "name": this.state.name,
      "abilities": [],
      "moves": [],
      "stats": [
        {
          "value": this.state.hp,
          "name": "hp"
        }
      ],
      "types": [
        null,
        null
      ],
      "sprites": {
        "front": this.state.frontUrl,
        "back": this.state.backUrl
      }
    }
    this.props.addOnePokemon(newPokemonPOJO)
    let blankState = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
    this.setState(blankState)
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
