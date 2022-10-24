import Top from "../TopBottom/Top"
import Bottom from "../TopBottom/Bottom"
import styled from "styled-components"
import { useContext, useState,useEffect } from "react"
import MyContext from "../contexts/myContext"
import vetor from '../img/Vector.png'
import axios from "axios"
import Chek from "./Check"
import dayjs from "dayjs"
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)
export default function Tela4() {
    const{dados,datas,setDatas,progress,setProgress} = useContext(MyContext)
    const [render,setRender] = useState(0)
    const [cor,setCor] = useState('')
    const [dia,setDia]=useState({
        date:dayjs().date(),
        month:dayjs().month(),
        day:dayjs().day()
    })
    require('dayjs/locale/pt-br')
    let today = dayjs().locale('pt-br').format('dddd, DD/MM')
    useEffect(()=>{
        console.log('SEU TOKEN',dados.token)
        const config = {
            headers: {
                Authorization: `Bearer ${dados.token}`
            }
        }
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,config)
    
        promise.then(resposta => 
          console.log(resposta.data)& setDatas(resposta.data)&
          resposta.data.map((e)=>e.done===true?
          setProgress(resposta.data.filter(e => e.done === true).length/resposta.data.length*100):null)
        )
        promise.catch(erro => {
            console.log('ERRO')
        })

      },[progress])




    return(
        <Hoje data-identifier="today-infos">
        <Top/>
        <Layout>
        <div>
            <h1>{today}</h1> 
            {progress===0?<h3>Nenhum hábito concluído ainda</h3>:
            <h3>{ Math.round(progress)}% dos hábitos concluídos</h3>}
        </div>
        {datas.length===0?null:
            datas.map((e,i)=> <Habito cor={cor} key={i}>
            <h1>{e.name}</h1>
            <Chek i={i} e={e} setRender={setRender} />
        </Habito>)
        }
        </Layout>
        <Bottom/>
        </Hoje>
    )
}
const Hoje = styled.div`
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

const Layout = styled.div`
height:100%;
width:80vw;
display:flex;
flex-direction:column;
margin-bottom:110px;
div{
    color:#126BA5;
    font-size:22.98px;
    justify-content:space-between;
    margin-top: 20px;
    h3{
        color:#BABABA;
        display:flex;
    }
    h1{
        font-weight:400;
    margin-top:20px;
    }
    }
`
const Habito = styled.div`
background-color:white;
width:340px;
min-height:90px;
border-radius: 5px;
margin-top:20px;
display:flex;
flex-direction:column;
position:relative;
padding:10px;

span{
    position:absolute;
    right: 10px;
    bottom: 10px;
    width:70px;
    height:70px;
    background-color:${props=>props.cor};
    border-radius: 5px;
    display:flex;
    align-items:center;
    justify-content:center;
}
`