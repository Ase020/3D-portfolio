import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { React } from "../3D-models";

const Container = styled.div`
  width: 700px;
  height: 100vh;
`;

const WebDev = () => {
  return (
    <Container>
      <Canvas>
        <Stage environment={"studio"} intensity={1}>
          <React position={[3, 0, 0]} scale={[4, 3, 2]} />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Container>
  );
};

export default WebDev;
