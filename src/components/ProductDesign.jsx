import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Watcher } from "../3D-models";
import styled from "styled-components";

const Container = styled.div`
  width: 700px;
  height: 100vh;
`;

const ProductDesign = () => {
  return (
    <Container>
      <Canvas>
        <Stage environment={"studio"} intensity={1}>
          <Watcher position={[0, 0, 0]} scale={[2, 2, 2]} />
        </Stage>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </Container>
  );
};

export default ProductDesign;
