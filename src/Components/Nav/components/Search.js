import React, { useState } from 'react'
import '../style/Search.css'
import Searc from '../../../Data/Search/Search.json'
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
const Search = () => {
  const [searchValue,setSerachValue]=useState('');
  const handleChange=(e)=>{
   setSerachValue(e.target.value)
   console.log(searchValue)
  }

  return (
    <div className='search'>
      <input type="text" placeholder='Seach your Destination' value={searchValue} onChange={handleChange}/>
      <div className="search-icon"><CiSearch className='search-icn'/></div>
      <div className='all-trek'>
        {Searc.filter((item)=>{
          const searchTrem=searchValue.toLowerCase();
          const name=item.name.toLowerCase();
          return searchTrem && name.startsWith(searchTrem)
        }).map((item,key)=>{
          return <Link to={item.link} key={key} className='link' onClick={()=>setSerachValue("")}><div className='div'>{item.name}</div></Link>
        })}
      </div>
      
    </div>
  )
}

export default Search