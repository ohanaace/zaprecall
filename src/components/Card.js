import styled from "styled-components";
import play from "../assets/seta_play.png"
import virar from "../assets/seta_virar.png"
import certo from "../assets/icone_certo.png"
import quase from "../assets/icone_quase.png"
import errado from "../assets/icone_erro.png"
import { useState } from "react";
import Button from "./Button"
import botoes from "./botoes";

export default function Card({ question, answer, index, perguntasRespondidas, setPerguntasRespondidas }) {
    const [icone, setIcone] = useState(play)
    const [setaVirada, setSetaVirada] = useState(false)
    const [ocultar, setOcultar] = useState(false)
    const [enunciado, setEnunciado] = useState("Pergunta " + index)
    const [respondida, setRespondida] = useState(false)
    const [dataTestImg, setDataTestImg] = useState("play-btn")
    const [corDoTexto, setCorDoTexto] = useState("#000000")
    function mostrarPergunta() {
        if (respondida) {
            return
        }
        setIcone(virar)
        setSetaVirada(true)
        setDataTestImg("turn-btn")
        setEnunciado(question)
        if (icone === virar) {
            mostrarResposta()
        }
    }
    function mostrarResposta() {
        setEnunciado(answer)
        setOcultar(true)

    }
    function responderPergunta(resposta) {
        setOcultar(false)
        setSetaVirada(false)
        setRespondida(true)
        setEnunciado(`Pergunta ${index}`)
        setPerguntasRespondidas([...perguntasRespondidas, index])
        if (resposta === "Zap!") {
            setDataTestImg("zap-icon")
            setIcone(certo)
            setCorDoTexto("#2FBE34")
        }
        if (resposta === "Quase não lembrei") {
            setDataTestImg("partial-icon")
            setIcone(quase)
            setCorDoTexto("#FF922E")
        }
        if(resposta === "Não lembrei"){
            setDataTestImg("no-icon")
            setIcone(errado)
            setCorDoTexto("#FF3030")
        }
    }

    return (
        <Pergunta setaVirada={setaVirada} corDoTexto={corDoTexto} respondida={respondida} ocultar={ocultar} data-test={"flashcard"} >
            <p data-test={"flashcard-text"} >{enunciado}</p>
            <img src={icone} data-test={dataTestImg} onClick={mostrarPergunta} alt="seta" />
            <Botoes setaVirada={setaVirada} ocultar={ocultar} >
              {botoes.map((b) => <Button cor={b.cor} data-test={b.dataTest} onClick={() => responderPergunta(b.texto)} texto={b.texto}/>)}
            </Botoes>
        </Pergunta>
    )
}
const Pergunta = styled.div`
    width: 350px;
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
        display: ${props => props.ocultar ? "none" : "initial"};
        width: 20px;
        height: 23px;
    }
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        text-decoration: ${props => props.respondida ? "line-through" : "none"};
        color: ${props => props.corDoTexto};
    }
`
const Botoes = styled.div`
    width: 275px;
    display: ${props => props.setaVirada ? "flex" : "none"};
    justify-content: space-between;
    visibility: ${props => props.ocultar ? "initial" : "hidden"};
    margin-top: 20px;

`