import React from 'react';

function Frase(props) {
    return (
        <div className="frase">
            <h1>{props.frase.quote}</h1>
            <p>{props.frase.author}</p>
        </div>
    )
}

export default Frase;