import styled from "styled-components";
import { Navbar } from "../components";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Container = styled.div`
  height: 100vh;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  background: #b5b3b3;
`;

const Left = styled.div``;

const Title = styled.h1``;

const Intro = styled.div``;

const Line = styled.img``;

const Subtitle = styled.p``;

const Desc = styled.p``;

const Button = styled.button`
  background: #da4ea2;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const Right = styled.div``;

const Img = styled.img``;

const Hero = () => {
  return (
    <Section>
      <Navbar />

      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>

          <Intro>
            <Line src="./assets/line.png" />

            <Subtitle>What I Do</Subtitle>
          </Intro>

          <Desc>
            I enjoy creating delightful, human-centered digital experiences.
          </Desc>

          <Button>Learn more</Button>
        </Left>

        <Right>
          <Img src="./assets/moon.png" alt="moon" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
