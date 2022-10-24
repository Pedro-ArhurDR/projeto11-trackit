import styled,{keyframes} from "styled-components"
import logo from "../img/Logo.png"
import MyContext from "../contexts/myContext"
import { useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function Tela2(){
    const {setSenha,setEmail,setFoto,setNome,senha,email,nome,foto} = useContext(MyContext)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    console.log()

    const cadastro = {
        email:email,
        name: nome,
        image: foto,
        password:senha 
    }
    console.log(cadastro)

    function cadastrar(event){
        event.preventDefault()
        setIsLoading(true)
       const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',cadastro)

       promise.then(()=>navigate('/')& setIsLoading(false))
       promise.catch(err =>alert(err.response.data.message) & setIsLoading(false) )

        console.log('CADASTRO FINAL',cadastro)
    }
    return (
        <Screen1>

        <img src={logo}/>
        <form onSubmit={cadastrar}>
        <input placeholder="email" type="email" onChange={e => setEmail(e.target.value)} required/>
        <input placeholder="senha" type="password" onChange={e => setSenha(e.target.value)}required/>
        <input placeholder="nome" type="text" onChange={e => setNome(e.target.value)}required/>
        <input placeholder="foto" type="text" onChange={e => setFoto(e.target.value)}required/>
        <button type="submit" disabled={isLoading}>
        {isLoading===false?'Cadastrar':<DotWrapper>
                        <Dot delay="0s" />
                        <Dot delay=".1s" />
                        <Dot delay=".2s" />
             </DotWrapper>}
        </button>
        </form>
        <Link to='/'><p>Já tem uma conta? Faça login!</p></Link>
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
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
;
`
const DotWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
;
`
const Dot = styled.div`
  background-color: #FFFFFF;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
;
`