import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyContext from "../contexts/myContext";
import CircularBar from "./CircularBar";
import axios from "axios";
export default function Bottom() {
    const {progress,setProgress,dados,setDatas,datas} = useContext(MyContext)
    const [progresso,setProgresso] = useState('')
    const navigate = useNavigate()
    return(
    <Bot>
        <div data-identifier="habit-page-action" onClick={()=>navigate('/habitos')}>Hábitos</div>
        <Link to={'/hoje'}>
        <CircularBar progress={progress}/>
        </Link>
        
      <div data-identifier="historic-page-action" onClick={()=>navigate('/historico')}>Historico</div>
    </Bot>)
}

const Bot = styled.div`
    left:0;
    bottom:0;
    width:100%;
    height:70px;
    background-color:#FFFFFF;
    display:flex;
    justify-content:space-around;
    align-items:center;
    position:fixed;
    
    
    div{
        color:#52B6FF;
        font-size: 17.98px;
        font-weight: bold;
    }

    .CircularProgressbar{
        text-align: center;
        width:90px;
        height:90px;
        font-size:20px;
    }
    .CircularProgressbar-text {
    transform: translate(-20px, 5px);
}
`