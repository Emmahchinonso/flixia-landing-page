import styled from "styled-components";
import { Container } from "./components/Container";
import Nav from "./components/Nav";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <>
      <Nav />
      <Main>
        <HeroContainer>
          <HeroContent>
            <h1>Get the latest entertainment</h1>
            <p>
              Watch movies, sports and music videos. An experience like never
              before
            </p>
          </HeroContent>
          <HeroImage />
        </HeroContainer>
      </Main>
      <GlobalStyles />
    </>
  );
}

const HeroContainer = styled(Container)`
  padding-top: 150px;
  display: flex;
`;

const Main = styled.main`
  padding-left: 14px;
`;

const HeroContent = styled.div`
  flex-basis: 480px;
  & > h1 {
    font-size: 6rem;
    line-height: 5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  & > p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 500;
  }
`;
const HeroImage = styled.img``;

export default App;
