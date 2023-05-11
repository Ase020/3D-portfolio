import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 90vh;
  width: 1200px;
  display: flex;
  flex-direction: row-reverse;
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

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Think outside the square space</Title>

          <Intro>
            <Line src="./assets/line.png" />

            <Subtitle>What I Am</Subtitle>
          </Intro>

          <Desc>A create Developer with a passion for creating solutions.</Desc>

          <Button>My Projects</Button>
        </Left>

        <Right>
          <Img src="./assets/moon.png" alt="moon" />
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
