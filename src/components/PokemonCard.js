import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

state = {
  clicked: false
}

handleClick = (e) => {
  this.setState({
    clicked: !this.state.clicked
  })
}

  render() {
    // console.log(this.props.pokemon)
    let {name, sprites} = this.props.pokemon
    return (
      <Card>
        <div >
          <div className="image">
            <img src={this.state.clicked ? sprites.front : sprites.back} alt="oh no!" onClick={this.handleClick}/>
          </div>
          <div className="content">
            <div className="header">{name}
          
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
