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
  height: 90vh;
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`;

const Title = styled.h1`
  font-size: 54px;
  margin: 12px 0;
`;

const Intro = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
  font-size: 20px;
  margin: 6px 0;
`;

const Desc = styled.p`
  color: lightgray;
  font-size: 18px;
`;

const Button = styled.button`
  background: #da4ea2;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 100px;
  font-weight: 500;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  inset: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;

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
