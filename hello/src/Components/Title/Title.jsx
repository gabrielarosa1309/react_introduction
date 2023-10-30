import React from "react";
import './Title.css';

//CRIAÇÃO DE COMPONENTE
//Componentes são funções

//Método convencional de criação de função
// export default function Title() {
//     return(
//         <h1 className="title">Hello Title Component</h1>
//     );
// } 

//Método com arrow function: mais limpo e mais moderno
// const Title = () => {
//     return(
//         <h1 className="title">Hello Title Component</h1>
//     );
// }

//Arrow function mais simplificado e mais limpo
// const Title = () => <h1 className="title">Hello Title Component</h1>


//CRIAÇÃO DE PROPS
//Props são dados imutáveis de componentes

const Title = (props) => {
    return(
        <h1 className="title">Hello {props.text}</h1>
        );
    }
    
export default Title;