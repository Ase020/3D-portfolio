import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Rock } from "../3D-models";

const Container = styled.div`
  width: 700px;
  height: 100vh;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Desc = styled.p`
  width: 250px;
  height: 70px;
  padding: 12px;
  background: #fff;
  border-radius: 8px;
  position: absolute;
  top: 20px;
  right: 40px;
  color: gray;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    right: 20px;
  }
`;

const Illustration = () => {
  return (
    <Container>
      <Canvas>
        <Stage environment={"studio"} intensity={1}>
          <Rock position={[0, 0, 0]} scale={[2, 2, 2]} />
        </Stage>
        <OrbitControls enableZoom={true} autoRotate />
      </Canvas>

      <Desc>
        I design products with a strong focus on both world class design and
        ensuring your product is a market success.{" "}
      </Desc>
    </Container>
  );
};

export default Illustration;
