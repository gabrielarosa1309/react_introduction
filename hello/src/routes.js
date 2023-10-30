import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

//Imports dos componentes - PAGINAS
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route element={<HomePage/>} path={"/"} exact/>
                <Route element={<LoginPage/>} path={"/"}/>
                <Route element={<ProdutoPage/>} path={"/"}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;