import Tela1 from "./LoginCadastro/Tela1"
import Tela2 from "./LoginCadastro/Tela2"
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MyContext from "./contexts/myContext"
import Tela3 from "./habitos/Tela3";
import Tela5 from "./Historico/Tela5";
import Tela4 from "./Hoje/Tela4";
import axios from "axios";
export default function Container() {
    const[nome,setNome] = useState('')
    const[senha,setSenha] = useState('')
    const[email, setEmail] = useState('')
    const[foto, setFoto] = useState('')
    const[dados,setDados] = useState({})
    const[token,setToken]= useState('')
    const [datas,setDatas] = useState([])
    const [progress,setProgress] = useState(0)
    useEffect(()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${dados.token}`
            }
        }
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,config)
    
        promise.then(resposta => 
          setDatas(resposta.data) &console.log('FOI')& 
          resposta.data.map((e)=>e.done===true?setProgress(resposta.data.filter(e => e.done === true).length/resposta.data.length*100):null)
        )
        promise.catch(erro => {
            console.log(erro.response.data.message)
        })
    },[dados])
    return (
        <MyContext.Provider value={{datas,setDatas,nome,setNome,email,setEmail,foto,setFoto,senha,setSenha,dados,setDados,token,setToken,progress,setProgress}}>
        <Cont>
            <BrowserRouter>
        <Routes>
            <Route path='/' element={<Tela1/>}/>
            <Route path='/cadastro' element={<Tela2/>}/>
            <Route path='/habitos' element={<Tela3/>}/>
            <Route path='/hoje' element={<Tela4/>}/>
            <Route path='/historico' element={<Tela5/>}/>
        </Routes>
        </BrowserRouter>
        </Cont>
        </MyContext.Provider>
    )
}

const Cont = styled.div`
    width:100%;
    height:100%;
    overflow-y: scroll;
/* CSS Document */

html,body,div,ul,ol,li,a,img,span,p,b,input,label {

}

ul,ol {
	list-style:none;
}

a {
	text-decoration: none;
}

a:hover {

}

table {
	border-spacing:0;
	border-collapse:collapse;
}

`