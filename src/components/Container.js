import Perguntas from "./Card"
import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"
import Card from "./Card"
import cards from "./cards"

export default function Container() {
    return (
        <>
            <Cabecalho />
            {cards.map((c) => <Card question={c.question} answer={c.answer} index={c.index} key={c.index}/>)}
            <Rodape />
        </>
    )
}
