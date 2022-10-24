import styled from 'styled-components'
import vetor from '../img/Vector.png'
import { useState,useContext, useEffect } from 'react'
import MyContext from '../contexts/myContext'
import axios from 'axios'
export default function Chek({marcarTarefa,i,e,setRender}) {
    const [cor,setCor] = useState('')
    const [colorT,setColorT] = useState('#BABABA')
    const [colorT2,setColorT2] = useState('#666666')
    const{progress,setProgress,datas,setDatas,dados} = useContext(MyContext)
    const tamanho = datas.length
    const [sequencia,setSequencia] = useState(e.currentSequence)
    const [recorde,setRecorde] = useState(e.highestSequence) 

    useEffect(()=>{
        console.log( e.done)
        if(e.done===true){
            setCor('#8FC549')
        }
        else{
            setCor('#E7E7E7')
        }

    },[])
    function marcarTarefa(indice){
        if(cor==='#8FC549'){
            const config = {
                headers: {
                    Authorization: `Bearer ${dados.token}`
                }
            }
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${e.id}/uncheck`,e.id,config)
            promise.then(resposta => 
                setCor('#E7E7E7')& setProgress(progress-100/tamanho)&setSequencia(sequencia-1)
            )
            promise.catch(erro => {
                console.log('ERRO',erro.response.data.message)
            })
        } 
        else{
            const config = {
                headers: {
                    Authorization: `Bearer ${dados.token}`
                }
            }
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${e.id}/check`,e.id,config)
            promise.then(resposta => 
                setCor('#8FC549')&setRender([+1])&setSequencia(sequencia+1)&setProgress(progress+100/tamanho)
            )
            promise.catch(erro => {
                console.log('ERRO',erro.response.data.message)
            })
        }
      }
    return(
    <>
    <Vector cor={cor}onClick={()=>marcarTarefa(i)}><img src={vetor}/></Vector>
                <h3>sequencia atual: <Texto colorT={colorT}> {sequencia} </Texto> dias</h3>
            <h3>seu recorde:<Texto colorT2={colorT2}>{recorde} </Texto> dias</h3>
    </>
        
    )

}

const Vector = styled.span`
background-color:${props=>props.cor};


`
const Texto = styled.p`

color:${props => props.colorT};
 margin:0 4px;
`
const Texto2 = styled.p`
color:${props => props.colorT2};
margin:0 4px;
`