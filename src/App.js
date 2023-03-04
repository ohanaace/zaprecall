import Container from "./components/Container";
import GlobalStyled from "./styled/GlobalStyled"
import Styled from "./styled/Styled"
import styled from "styled-components";

function App() {
  return (
    <ContainerDeck>
      <GlobalStyled />
      <Styled />
      <Container />   
    </ContainerDeck>
  );
}

export default App;



const ContainerDeck = styled.div`
  width: 375px;
  height: 667px;
  border: 1px solid #dbdbdb;
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
  overflow: scroll;
  position: relative;
  overflow-x: hidden;
  ::-webkit-scrollbar{
    width: 0px;
  }
`
