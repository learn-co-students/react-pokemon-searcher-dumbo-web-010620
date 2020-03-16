import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  findHP=(pokeStats)=>{
    let selectedStat = pokeStats.filter(stats=>{
      if (stats.name === 'hp'){
        return stats
      }
    })
    return selectedStat[0]
  }

  onClick=(event)=>{
    this.props.delete(this.props)
  }


  render() {
    return (
      <Card>
        <div>
          <div className="delete" onClick={event=>this.onClick(event)}>
              <button>delete</button>
          </div>
          <div className="image" onClick={event=>this.props.flipCard(this.props)}>
            {
            this.props.face !== 'back'?
            <img src={`${this.props.spriteFront}`} alt="oh no!" />
            :
            <img src={`${this.props.spriteBack}`} alt="oh no!" />
            }
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHP(this.props.stats).value +" "+ this.findHP(this.props.stats).name}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}
PokemonCard.defaultProps = {
  face: 'front'
}

export default PokemonCard
