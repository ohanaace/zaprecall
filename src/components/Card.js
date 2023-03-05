import styled from "styled-components";
import play from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"
import certo from "../assets/icone_certo.png"
import quase from "../assets/icone_quase.png"
import errado from "../assets/icone_erro.png"
import { useState } from "react";



export default function Card({question, answer, index}){
    const [seta, setSeta] = useState(play)
    const [setaVirada, setSetaVirada] = useState(false)
    const [enunciado, setEnunciado] = useState("Pergunta " + index)
    const [respondida, setRespondida] = useState(false)
    function mostrarPergunta(){
        setSeta(virar);
        setSetaVirada(true)
        setEnunciado(question)
        if(seta === virar){
            mostrarResposta()
        }
    }
    function mostrarResposta(){
        setEnunciado(answer)
        setRespondida(true);
    }

    return (
        <Pergunta setaVirada={setaVirada} respondida={respondida} data-test={"flashcard"} >
            <p data-test={"flashcard-text"}>{enunciado}</p>
            <img src={seta} data-test={"play-btn"} onClick={mostrarPergunta} alt="seta"/>
            <Botoes setaVirada={setaVirada} respondida={respondida}>
                <Botao cor={"#FF3030"} data-test={"no-btn"}> Não lembrei</Botao>
                <Botao cor={"#FF922E"} data-test={"partial-btn"}> Quase não lembrei</Botao>
                <Botao cor={"#2FBE34"} data-test={"zap-btn"}> Zap!</Botao>
            </Botoes>
        </Pergunta>
    )
}

const Pergunta = styled.div`
    width: 350px;
    /*height: ${props => props.setaVirada ? "130px" : "65px"};*/
    height: auto;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, .15);
    margin: 25px;
    padding: 15px 23px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    img{
        display: ${props => props.respondida? "none" : "initial"};
        width: 20px;
        height: 23px;
    }
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
    }
`
const Botoes = styled.div`
    width: 275px;
    display: ${props => props.setaVirada? "flex" : "none"};
    justify-content: space-between;
    visibility: ${props => props.respondida? "initial" : "hidden"};
    margin-top: 20px;

`
const Botao = styled.button`
    width: 86px;
    height: 37px;
    color: #ffffff;
    font-weight: 400;
    font-family: 'Recursive';
    font-size: 12px;
    background-color: ${props => props.cor};
    padding: 7px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    

`