import React from 'react';

export default function Controls({handleAwayClick}) {
    return(
        <div className="buttonControls">
            <button onClick={handleAwayClick}>Pause Demo</button>
        </div>
    )
}