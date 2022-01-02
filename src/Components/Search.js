import React, { useState, useContext } from 'react'
import { IoIosSearch } from 'react-icons/io';
import Context from './Context';
import Toolbar from './Toolbar';

const Search = () => {
    const { search, setSearch } = useContext(Context);
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    return (
        <div className="searchBar">
            <IoIosSearch className="searchIcon" color={'#263238'} />
            <input type="text" placeholder="Search Brands" className="searchInput" onChange={handleChange} />
            <Toolbar />
        </div>
    )
}

export default Search
