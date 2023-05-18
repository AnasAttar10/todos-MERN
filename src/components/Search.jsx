import React, { useState } from 'react'

const Search = ({handleSearchInput}) =>{
  const [search , setSearch] = useState("")
  const handleInput =(e)=>{
    const value = e.target.value.trim().toLowerCase()
    setSearch(value);
    handleSearchInput(value)
  }
  return (
    <div>
        <input type='search' className='my-3 w-100 p-1' name='search' value={search} placeholder='Search by Task Text ...' onChange={handleInput}/>
    </div>
  )
}

export default Search