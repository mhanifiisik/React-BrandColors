import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import Context from './Context'
import Toolbar from './Toolbar'
import Brands from './Brands'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'


const Collection = () => {
    const { slugs } = useParams();
    const { selected, setSelected, colors } = useContext(Context);

    useEffect(() => {
        setSelected(slugs.split(','))
    }, [])
    selected.map((slug) => {
        let newColors = colors.find((color) => color.slug === slug)
        console.log(newColors);
    })

    return (
        <div className="showcase">
            <div className="top-text">
                <Link to="/" onClick={() => setSelected([])}><MdOutlineKeyboardBackspace size={25} />All Brands</Link>
                <Toolbar />
            </div>
            <div className="main">
                {selected.map((slug) => {
                    let newColors = colors.find((color) => color.slug === slug);
                    return (
                        <Brands brand={newColors} />

                    )
                })}
            </div>
        </div >
    )
}

export default Collection
