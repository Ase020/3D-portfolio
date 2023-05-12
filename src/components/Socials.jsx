import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { SocialsLogo } from "../3D-models";

const Container = styled.div`
  width: 700px;
  height: 100vh;
`;

const Socials = () => {
  return (
    <Container>
      <Canvas>
        <Stage environment={"studio"} intensity={1}>
          <SocialsLogo position={[0, 0, 0]} scale={[2, 2, 2]} />
        </Stage>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </Container>
  );
};

export default Socials;
