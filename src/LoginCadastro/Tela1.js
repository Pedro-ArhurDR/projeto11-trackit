import styled from "styled-components"
import logo from "../img/Logo.png"
import { Link } from "react-router-dom"
import MyContext from "../contexts/myContext"
import { useContext } from "react"
import axios from "axios"
export default function Tela1({}){
    const {email,senha,setEmail,setSenha,dados,setDados} = useContext(MyContext)

    const logar = {
        email:email,
        password:senha
    }
    console.log(logar)
    function login(event){
        event.preventDefault()
        console.log('LOGAR FINAL',logar)
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',logar)
        promise.then(res => 
            setDados(res.data)
            )


        promise.catch(err =>
            alert(err.response.data.message)
            )
    }

    return (
        <Screen1>
        
        <img src={logo}/>
        <form onSubmit={login}>
        <input placeholder="email" type="email" value={email}  onChange={e => setEmail(e.target.value)} required/>
        <input placeholder="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} required/>
        <button type="submit">Entrar</button>
        </form>
        <Link to="/cadastro"><p>Não tem uma conta?{} Cadastre-se!</p></Link>
        </Screen1>
    )
}



const Screen1 = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    form{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
    img{
        width:180px;
        height:180px;
    }
    input{
        width:303px;
        height:45px;
        margin-bottom:5px;
        font-size: 20px;
        border-radius: 5px;
        border: 1px solid #D5D5D5;
    }
    button{
        width:303px;
        height:45px;
        background-color:#52B6FF;
        font-size: 21px;
        color:white;
        margin-bottom: 20px;
        border:1px solid #52B6FF;
    }
    p{
        color:#52B6FF;
        font-weight:bold;
        text-decoration-line: underline;
    }
`