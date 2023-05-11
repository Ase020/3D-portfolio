/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 4]} />
          <color attach="background" args={["pink"]} />
          <Text fontSize={2} color={"#d53232"} ref={textRef}>
            Nice!
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
      {/* <meshMatcapMaterial color={"red"} /> */}
    </mesh>
  );
};

export default Cube;
