import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    let {name, sprites, stats} = this.props.pokemon
    let hp = stats.find(s => s.name === 'hp').value
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.clicked ? sprites.back : sprites.front} alt={name} onClick={this.handleClick}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
