import Tela1 from "./LoginCadastro/Tela1"
import Tela2 from "./LoginCadastro/Tela2"
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MyContext from "./contexts/myContext"


export default function Container() {
    const[nome,setNome] = useState('')
    const[senha,setSenha] = useState('')
    const[email, setEmail] = useState('')
    const[foto, setFoto] = useState('')
    const[dados,setDados] = useState({})
    console.log(dados)
    return (
        <MyContext.Provider value={{nome,setNome,email,setEmail,foto,setFoto,senha,setSenha,dados,setDados}}>
        <Cont>
            <BrowserRouter>
        <Routes>
            <Route path='/' element={<Tela1/>}/>
            <Route path='/cadastro' element={<Tela2/>}/>
        </Routes>
        </BrowserRouter>
        </Cont>
        </MyContext.Provider>
    )
}

const Cont = styled.div`
    width:100%;
    height:100%;

`