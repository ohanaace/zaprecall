import styled from "styled-components"
export default function Button({cor, texto, onClick}){
    return (
        <Botao cor={cor} onClick={onClick}>{texto}</Botao>
    )
}

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
    border-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        cursor: pointer;
    }
`