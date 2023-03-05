import Perguntas from "./Card"
import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"
import Card from "./Card"
import cards from "./cards"
import { useState } from "react"
export default function Container() {
    const [perguntasRespondidas, setPerguntasRespondidas] = useState([])
    const totalDePerguntas = cards.length
    return (
        <>
            <Cabecalho />
            {cards.map((c) => <Card perguntasRespondidas={perguntasRespondidas} setPerguntasRespondidas={setPerguntasRespondidas} question={c.question} answer={c.answer} index={c.index} key={c.index}/>)}
            <Rodape perguntasRespondidas={perguntasRespondidas} totalDePerguntas={totalDePerguntas}/>
        </>
    )
}
