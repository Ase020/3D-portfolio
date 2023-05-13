/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const Cube = () => {
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

  const fontSize = width > 768 ? 2 : 1;

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
          <Text fontSize={fontSize} color={"#d53232"} ref={textRef}>
            Nice!
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
      {/* <meshMatcapMaterial color={"red"} /> */}
    </mesh>
  );
};

export default Cube;
