//rsc
import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    function handleIncrementar() {
        setContador(contador + 1);
    }

    function handleDencrementar() {
        setContador(contador === 0 ? 0 : contador - 1);
    }

    return (
        <div>
            <h1>Contador</h1>
            <p>{contador}</p>
            <button onClick={() => {handleIncrementar()}}>Incrementar</button>
            <button onClick={() => {handleDencrementar()}}>Decrementar</button>
        </div>
    );
};

export default Contador;