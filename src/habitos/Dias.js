import styled from "styled-components"
import { useState,useEffect } from "react"
export default function Dias({i,e,diasE,setDiasE}) {
    const [colorT,setColorT] = useState("")
    const[color,setColor] = useState("")
    useEffect(()=>{
        if(!diasE.includes(i)){
            setColor("#FFFFFF")
            setColorT("#DBDBDB")
        }
        else{
            setColor("#DBDBDB")
            setColorT("#FFFFFF")
        }
      },[])

    function marcarDias(indice){
        setColor("#DBDBDB")
        setColorT("#FFFFFF")
        if(!diasE.includes(indice)){
            setDiasE([...diasE,indice])
            console.log('dias escolhidos',diasE)
        }

        if(color==="#DBDBDB"){
            setColor("#FFFFFF")
            setColorT("#DBDBDB")
            const index = diasE.indexOf(i)
            const novoarray= diasE.splice(index,1)
        }
    }
    return(
        <Dia cor={color} corT={colorT} onClick={()=>marcarDias(i)} key={i}>{e}</Dia>
    )
}

const Dia= styled.p`
            width:30px;
        height:30px;
        color: ${props=>props.corT};
        font-weight:bold;
        align-items:center;
        border-radius: 5px;
        background-color:${props=>props.cor};
        border: 1px solid #D5D5D5;
        display:flex;
        justify-content:center;
        align-items:center;
`