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
            {cards.map((c, i) => <Card
                perguntasRespondidas={perguntasRespondidas}
                setPerguntasRespondidas={setPerguntasRespondidas}
                question={c.question}
                answer={c.answer}
                index={i}
                key={i} />)}
            <Rodape
                perguntasRespondidas={perguntasRespondidas}
                totalDePerguntas={totalDePerguntas} />
        </>
    )
}
