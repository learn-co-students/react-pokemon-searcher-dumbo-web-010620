import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: true
  }

  handleClick = (e) => {
    console.log("flipped")
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {

    let {name, sprites, stats} = this.props.pokemon
    let hp = stats.find(s => s.name === 'hp').value || 50
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
          <img alt="front" src={this.state.flipped ? sprites.front : sprites.back} />
            {/* {this.state.flipped ?
            <img alt="front" src={sprites.front} />
            :
            <img alt="back" src={sprites.back} />
            } */}
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp  
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
