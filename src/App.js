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
        <AboutUs>
          <AboutContainer as="section">
            <h2>The number one stop for all your entertainment needs</h2>
            <CardList>
              <Card>
                <h3>Watch Movies</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias officiis possimus delectus soluta quaerat, cumque
                  tenetur iure itaque totam in?
                </p>
              </Card>
              <Card>
                <h3>Watch Sports</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias officiis possimus delectus soluta quaerat, cumque
                  tenetur iure itaque totam in?
                </p>
              </Card>
              <Card>
                <h3>Watch Series</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias officiis possimus delectus soluta quaerat, cumque
                  tenetur iure itaque totam in?
                </p>
              </Card>
            </CardList>
          </AboutContainer>
        </AboutUs>
        <GetStarted>
          <Container>
            <h2>Get started</h2>
            <p>Signin to begin enjoying great contents</p>
            <Form>
              <Label htmlFor="email">Email Address</Label>
              <InputField type="email" />
              <SubmitButton>Get magic link</SubmitButton>
            </Form>
          </Container>
        </GetStarted>
      </Main>
      <GlobalStyles />
    </>
  );
}

const HeroContainer = styled(Container)`
  padding-top: 150px;
  padding-bottom: 70px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`;

const Main = styled.main``;

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
`;

const AboutUs = styled.div`
  background-color: rgb(19, 32, 60);
  padding: 70px 0;
  color: #ccc;
`;

const AboutContainer = styled(Container)`
  & > h2 {
    text-align: center;
    max-width: 400px;
    margin-inline: auto;
    margin-bottom: 24px;
  }
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
`;

const CardList = styled.div`
  display: flex;
  gap: 30px;
  & > * {
    min-width: 0;
    flex: 1;
  }
`;

const GetStarted = styled.div`
  padding: 70px 0;

  & h2 {
    font-size: 36px;
    line-height: 42px;
  }

  & h2,
  & p {
    text-align: center;
  }
`;

const Form = styled.form`
  max-width: 480px;
  margin-inline: auto;
  padding-top: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const InputField = styled.input`
  display: block;
  width: 100%;
  padding: 14px;
  margin-bottom: 16px;
`;

const SubmitButton = styled(Button)`
  font-size: 20px;
  padding-inline: 14px;
  width: 100%;
`;

export default App;
