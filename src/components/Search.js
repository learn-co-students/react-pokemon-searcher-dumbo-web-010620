import React from 'react'

const Search = props => {

  const handleChange = (e) => {
    props.handleSearchTerm(e.target.value)
  }
  console.log(props.searchTerm)
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text"
          className="prompt" 
          value={props.searchTerm}
          onChange={handleChange} 
        />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
