import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {


  state= {
    clicked: true
  }


  handleClick = (e) => {

    this.setState({
      clicked: !this.state.clicked
    })
  }


  render() {

    let { name, sprites , stats} = this.props.pokemon
    
    let hp = stats.filter(stat => stat.name === "hp" ? stat : null)
    
    return (

      <Card>
        <div>
          <div className="image">
            <img 
              src={ this.state.clicked ? sprites.front : sprites.back} 
              alt={name} 
              onClick={ this.handleClick }  
              />  {/* ternary condition will be place here */}
          </div>
          <div className="content">
            <div className="header">{ name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {`${hp[0].value} ${hp[0].name}`}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
