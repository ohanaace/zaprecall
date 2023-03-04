import styled from "styled-components"
import logo from "../assets/logo.png"

export default function Cabecalho(){
    return (
        <Titulo>
            <img src= {logo}/>
            <h1>ZapRecall</h1>
        </Titulo>
    )
}

const Titulo = styled.div`
    width: 220px;
    height: 44px;
    color: #ffffff;
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 36px;
    margin-top: 48px;
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
        img{
            width: 52px;
            height: 60px;
        }
`