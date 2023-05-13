/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Cube } from "../components";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    flex: 1;
  }
`;

const Title = styled.h1`
  font-size: 54px;
  margin: 12px 0;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 42px;
    padding: 0 10px;
  }
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

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
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

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
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
          <Canvas camera={{ fov: 25, position: [4, 4, 4] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
