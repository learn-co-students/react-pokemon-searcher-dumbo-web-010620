import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  handleClick = event => {
    this.setState({clicked: !this.state.clicked})
  }
  
  render() {
    // let {height, weight, name, abilities, moves, stats, types, sprites} = this.props.pokemon
    let {name, stats, sprites } = this.props.pokemon
    let {front, back} = sprites
    let hpArray = stats.filter(obj=> obj.name==="hp")
    let hp = (hpArray[0].value)

    let sideToShow = this.state.clicked? back : front

    return (
      <Card>
        <div>
          <div className={"image"}>
            <img 
              src={sideToShow} 
              alt="oh no!" 
              onClick={this.handleClick} 
            />
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
