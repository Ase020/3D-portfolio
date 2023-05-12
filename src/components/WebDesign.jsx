import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Mac } from "../3D-models";
import styled from "styled-components";

const Container = styled.div`
  width: 700px;
  height: 85vh;
  position: relative;
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
`;

const WebDesign = () => {
  return (
    <Container>
      <Canvas>
        <Stage environment={"studio"} intensity={1}>
          <Mac position={[0, 0, 0]} scale={[2, 2, 2]} />
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

export default WebDesign;