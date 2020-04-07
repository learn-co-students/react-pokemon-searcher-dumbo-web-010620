import React from 'react'

const Search = props => {
  const handleKeystroke = (event) => {
    props.setSearchTerm(event.target.value)
    // props.filteredPokedex()
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          value={props.searchTerm}
          onChange={handleKeystroke} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
