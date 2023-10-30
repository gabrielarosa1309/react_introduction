import React from "react";
import './CardEvent.css';

const CardEvent = ({titulo, descricao, conectar}) => {
    return (
        <div class="card">
                <h1 class="card__titulo">{titulo}</h1>
                <p class="card__texto">{descricao}</p>
                <a class="card__conectar" href="">{conectar}</a>
        </div>   
    );
}

export default CardEvent;