/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import { Navbar } from "../components";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    height: 120vh;
  }
`;

const Container = styled.div`
  height: 90vh;
  width: 1200px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 54px;
  margin: 12px 0;

  @media only screen and (max-width: 768px) {
    text-align: center;
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
    font-size: 14px;
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

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  inset: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  /* z-index: 9; */

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scaleSize = width > 768 ? 2.5 : 2;

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
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={scaleSize}>
              <MeshDistortMaterial
                color="#420a6e"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>

          <Img src="./assets/moon.png" alt="moon" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
