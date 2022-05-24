import { React, useState } from "react";
import PropTypes from 'prop-types';

export default function Año(props) {
    const [año, useAño] = useState(props.año);

    const Decrementar = () => useAño(año - 1);
    const Incrementar = () => useAño(año + 1);

    return (
        <div className="year">
            <p> El año actual es: {año}</p>
            <button className="Incrementar" onClick={Incrementar}>Incrementa el año</button>
            <button className="Decrementar" onClick={Decrementar}>Decrementa el año</button>
        </div>
    )
}

Año.prototypes = {
    año: PropTypes.number.isRequired
}

Año.defaultProps = {
    año: new Date().getFullYear()
}