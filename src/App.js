import styled from "styled-components";
import Button from "./components/Button";
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
            <Button>Get Started</Button>
          </HeroContent>
          <HeroImage src="/movie-bg.jpg" alt="" />
        </HeroContainer>
      </Main>
      <GlobalStyles />
    </>
  );
}

const HeroContainer = styled(Container)`
  padding-top: 150px;
  display: flex;
  gap: 12px;
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
    margin-bottom: 0.5rem;
  }
  & > p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }
`;
const HeroImage = styled.img`
  height: 300px;
  border-radius: 8px;
  padding-left: 20%;
`;

export default App;
