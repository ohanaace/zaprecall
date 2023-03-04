import styled from "styled-components";
import cards from "./cards";
import seta from "../assets/seta_play.png"

export default function Perguntas(){
    return (
        cards.map((c) => <Card question={c.question} answer={c.answer} index={c.index}/>)
    )
}

function Card({question, answer, index}){
    return (
        <Pergunta>
            <p>Pergunta {index}</p>
            <img src={seta} />
        </Pergunta>
    )
}

const Pergunta = styled.div`
    width: 300px;
    height: 65px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, .15);
    margin: 25px;
    padding: 15px 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
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