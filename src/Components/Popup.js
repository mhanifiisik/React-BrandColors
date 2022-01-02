import React, { useContext } from 'react';
import Context from './Context';

const Popup = () => {
    const { text, setText } = useContext(Context);
    return (
        <div className="popup">
            <div>
                <p>Copied {text} to clipboard</p>
            </div>
        </div>
    )
}

export default Popup