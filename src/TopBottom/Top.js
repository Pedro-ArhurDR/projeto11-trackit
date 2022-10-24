import { useContext } from "react";
import styled from "styled-components";
import MyContext from "../contexts/myContext";
import track from "../img/TrackIt.png"
export default function Top() {
    const {dados} = useContext(MyContext)
    console.log('SUA IMAGEM',dados.image)
    return(
    <Topo>
        <img src={track}/> <div></div> <div><img src={dados.image}/></div>
    </Topo>
    )
}

const Topo = styled.div`

    top:0;
    left:0;
    width:100%;
    height:70px;
    background-color: #126BA5;
    display:flex;
    align-items:center;
    position:fixed;
    z-index:1;
    justify-content: space-around;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    div{
        img{
            width:51px;
            height:51px;
            border-radius: 25px;
        }
    }
`
