import React from 'react'

const SearchBox = (props) => {
  return (
    <div>
        <input type="text" placeholder="Search Movies..." className="input input-bordered w-24 md:w-auto" value={props.value} onChange={(e)=>props.setSearch(e.target.value)}/>
    </div>
  )
}

export default SearchBox