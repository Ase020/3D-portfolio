/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 watcher.gltf --transform
Author: Artjoms Horosilovs (https://sketchfab.com/Artjoms_Horosilovs)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/sea-keep-lonely-watcher-09a15a0c14cb4accaf060a92bc70413d
Title: Sea Keep "Lonely Watcher"
*/

// import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Watcher(props) {
  const { nodes, materials } = useGLTF("/watcher-transformed.glb");
  return (
    <group {...props} dispose={null} scale={2.5}>
      <group
        position={[17.12, 218.36, 23.59]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
      >
        <group position={[33.75, 38.71, -60.29]}>
          <mesh
            geometry={nodes.Fortress_Fortress_0.geometry}
            material={materials.Fortress}
          />
          <mesh
            geometry={nodes.Fortress_Fortress_0_1.geometry}
            material={materials.Fortress}
          />
          <mesh
            geometry={nodes.Fortress_Fortress_0_2.geometry}
            material={materials.Fortress}
          />
          <mesh
            geometry={nodes.Fortress_Environment_0.geometry}
            material={materials.Environment}
          />
          <mesh
            geometry={nodes.Fortress_Sand_0.geometry}
            material={materials.Sand}
          />
        </group>
      </group>
      <mesh
        geometry={nodes.Sea_Sea_0.geometry}
        material={materials.material}
        position={[-1.39, 326.22, 14.92]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Sky_Sky_0.geometry}
        material={materials.material_4}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/watcher-transformed.glb");
