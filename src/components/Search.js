import React from 'react'

const Search = (props) => {

const onChange = (e) => {
  props.changeSearch(e.target.value)
}

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={props.searchTerm} className="prompt" onChange={onChange} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
