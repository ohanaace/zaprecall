import styled from "styled-components"

export default function Rodape() {
    return (
        <Footer >
            <p> 0/8 Respondidos</p>
        </Footer>
    )
}

const Footer = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, .15);
    margin: 25px;
    padding: 15px 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
  }

`