import styled from "styled-components";
import Top from "../TopBottom/Top";
import Bottom from "../TopBottom/Bottom";
import mais from '../img/+.png'
import { useState,useEffect, useContext } from "react";
import Dias from "./Dias";
import cHabito from "./cHabito";
import axios from "axios";
import MyContext from "../contexts/myContext";
import lixo from '../img/lixo.png'
export default function Tela3() {
    const{dados,setDatas,datas,setProgress,progress,setDados} = useContext(MyContext)
    const dias =['D','S','T','Q','Q','S','S']
    const [diasE,setDiasE] = useState([])
    const [nomeH,setNomeH] = useState('')
    const habitoF = 
    {
        name:nomeH,
        days:diasE
    }
    const [listarH,setListarH] = useState([])
    console.log('LISTAR H',listarH)
    const [diasAPI,setDiasAPI]= useState([])
    const [isBool,setisBool]=useState(false)
    const[render,setRender]=useState(0)
    const [isLoading, setIsLoading] = useState(false);
    console.log(habitoF)
    console.log(nomeH)
    console.log(diasE)
    useEffect(()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${dados.token}`
            }
        }
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,config)
    
        promise.then(resposta => 
          setDatas(resposta.data)
        )
        promise.catch(erro => {
            console.log(erro.response.data.message)
        })
    },[])
    useEffect(()=>{
        console.log('SEU TOKEN',dados.token)
        const config = {
            headers: {
                Authorization: `Bearer ${dados.token}`
            }
        }
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,config)
    
        promise.then(resposta => 
             setListarH(resposta.data)
        )
    
        promise.catch(erro => {
            console.log('ERRO')
        })

      },[render])

    function salvarHabito(event){
        event.preventDefault();
        setIsLoading(true)
       if(habitoF.days.length===0){
        alert('escolha pelo menos 01(um) dia')
        setIsLoading(false)
       }
       else{
        const config = {
            headers: {
                Authorization: `Bearer ${dados.token}`
            }
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',habitoF,config)

        promise.then(resposta => 
            console.log(resposta) & setRender([+1]) & setisBool(false) & setIsLoading(false) & setNomeH('')&setDiasE([]) &setDados(dados)
        )
        promise.catch(erro => 
            alert(erro.response.data.message)&setIsLoading(false)
        )
       }

    }

    function criarHabito(){
        setisBool(true)
    }
    function deletarHabito(elemento,indice){
        const config = {
            headers: {
                Authorization: `Bearer ${dados.token}`
            }
        }
        console.log(elemento)
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${elemento.id}`,config)
        promise.then(resposta => 
            console.log(resposta) & setRender([+1])
        )
        promise.catch(erro => {
            console.log('ERRO',erro)
        })
    }
    return(
        <Habitos>
        <Top/>
        <Layout>
        <div>
            <h1>Meus Habitos</h1> 
            <div><img onClick={criarHabito} src={mais}/></div>
        </div>
        {isBool===false?null:
        <Habito>
            <form onSubmit={salvarHabito}>
            <input disabled={isLoading} placeholder="nome do hábito" type="text" value={nomeH} onChange={e => setNomeH(e.target.value)}required />
            <h3 >{dias.map((e,i)=><Dias diasE={diasE} setDiasE={setDiasE} i={i} e={e} key={i}/>)}</h3>
            <span onClick={()=>setisBool(false)}>Cancelar</span><button disabled={isLoading} type='submit'>Salvar</button>
            </form>
        </Habito>
    }
            {listarH.length===0?<h2>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h2>:
            listarH.map((a,i)=><HabitosAPI key={i}>
            <h2>{a.name}</h2>
            <span><img onClick={()=>window.confirm('Deseja mesmo deletar?')===true?deletarHabito(a,i):null} src={lixo}/></span>
            <h3>{dias.map((e,i)=><Dia key={i} colorT={a.days.includes(i)?'white':'#CFCFCF'} color={a.days.includes(i)?'#CFCFCF':'white'}>{e}</Dia>)}</h3>
            </HabitosAPI>)
            }

        </Layout>
        <Bottom/>
        </Habitos>
    )
}

const Habitos = styled.div`
    background-color:#E5E5E5;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    overflow-y: scroll;
  scroll-behavior: smooth;
  padding-top: 70px;
`
const Habito = styled.div`
background-color:white;
width:340px;
min-height:180px;
border-radius: 5px;
display:flex;
flex-direction:column;
    span{
        position:absolute;
        right:100px;
        bottom:10px;
        font-size:16px;
}   
    button{
        position:absolute;
        width:80px;
        height:30px;
        right:10px;
        bottom:10px;
        font-size:16px;
        border-radius:5px;
        background-color:#52B6FF;
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
}
    form{
        height:100%;
        position:relative;
    }
    input{
        width:300px;
        height:45px;
        font-size:20px ;
        margin-top: 10px;
    }
    h3{
        width:250px;
        display:flex;
        justify-content:space-evenly;
        margin-top:3px;
    }
`
const Layout = styled.div`
height:100%;
width:80vw;
display:flex;
flex-direction:column;
margin-bottom:110px;
h1{
    font-weight:400;
    margin-top:20px;
}
h2{
    margin-top:30px;
    font-weight:400;
    color:#666666;
}

div{
    display:flex;
    align-items:center;
    color:#126BA5;
    font-size:22.98px;
    justify-content:space-between;
    margin-top: 20px;
    div{
        width:40px;
    height:40px;
    border-radius:5px;
    background-color:#52B6FF;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 20px;
    }
    
}
`
const HabitosAPI = styled.div`
background-color:white;
width:340px;
min-height:90px;
border-radius: 5px;
margin-top:20px;
display:flex;
flex-direction:column;
position:relative;
    span{
        position:absolute;
        right:10px;
        bottom:50px;
        font-size:16px;
} 
    h2{
        position:absolute;
        left:10px;
        bottom:50px;
        color:#666666;
        font-size: 20px;
    }
    h3{
        position:absolute;
        left:10px;
        bottom:10px;
        width:250px;
        display:flex;
        justify-content:space-evenly;
        margin-top:3px;
    }
`
const Dia = styled.p `
        width:30px;
        height:30px;
        border-radius: 5px;
        color: ${props => props.colorT};
        font-weight:bold;
        align-items:center;
        border-radius: 5px;
        background-color:${props => props.color};
        border: 1px solid #D5D5D5;
        display:flex; 
        justify-content:center;
        align-items:center;
`