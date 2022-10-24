import Bottom from "../TopBottom/Bottom";
import Top from "../TopBottom/Top";
import styled from "styled-components";

export default function Tela5() {
    return(
        <Hist>
        <Top/>
        <h1>Histórico</h1>
        <br/>
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        <Bottom/>
        </Hist>
    )
}     

const Hist = styled.div`
    background-color:#E5E5E5;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    h1{
        font-weight: bold;
        color:#126BA5;
        font-size: 24px;
        margin-left:20px;
        margin-top:30px;
        margin-bottom:30px;
    }
    h2{
        font-weight: bold;
        font-size: 18px;
        color:#666666;
        display:flex;
        flex-wrap:wrap;
        width:300px;
        margin-left:20px;
    }
`