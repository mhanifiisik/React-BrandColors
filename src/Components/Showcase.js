import React, { useContext } from 'react'
import SearchBar from './Search'
import Brands from './Brands';
import Context from './Context';

const Showcase = () => {
    const { colors } = useContext(Context);
    return (
        <div className="showcase">
            <SearchBar />
            <div className="main">
                {colors.map((brand, index) => (
                    <Brands key={index} brand={brand} />
                ))}
            </div>
        </div >
    )
}

export default Showcase
