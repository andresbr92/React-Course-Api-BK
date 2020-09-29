import React, { Fragment } from 'react';
const Frase = ({ frase }) => {
    return (
        <Fragment>
            <h1>{frase.quote} <p>{frase.author}</p></h1>
        </Fragment>
    );
}

export default Frase;