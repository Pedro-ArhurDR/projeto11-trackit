import Container from "./Container"
import styled from "styled-components"

export default function App() {
    return (
        <GlobalStyle>
            <Container/>
        </GlobalStyle>
    )
}

const GlobalStyle = styled.div`
    height:100vmax;
    width:100%;
    font-family: 'Lexend Deca';
font-style: normal;
`