import Header from "./components/header";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right top,
    #0a2f75,  /* azul profundo */
    #164e9c,  /* azul médio */
    #1e6fd1,  /* azul forte */
    #2894f7,  /* azul claro vibrante */
    #4cc9f0,  /* azul celeste */
    #72e5f9   /* azul turquesa suave */
  );
`;


function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
