import styled from "styled-components";
import { Contacts, Hero, Who, Works } from "./sections";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  color: white;
  background: url("./assets/bg.jpeg");
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contacts />
    </Container>
  );
}

export default App;
