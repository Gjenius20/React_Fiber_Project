import { Physics, useBox, usePlane } from "@react-three/cannon";
import { OrbitControls, useGLTF, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { BoxHelper, SpotLightHelper } from "three";

useGLTF.preload("untitled.glb");

function SpotLight(props) {
  const light = useRef();
  useHelper(light, SpotLightHelper, "cyan");
  return <spotLight {...props} ref={light} />;
}

function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
  useHelper(ref, BoxHelper, "red");
  // useHelper(ref, AxesHelper(8));
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshPhongMaterial color={"blue"} />
    </mesh>
  );
}

function Tetra(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);

  // useFrame((state, delta) => (ref.current.rotation.y += delta));

  return (
    <mesh {...props} ref={ref}>
      <tetrahedronGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function GltfModels(props) {
  // const ref = useRef();
  const { nodes, materials } = useGLTF("./untitled.glb");
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 10, 0],
    rotation: [0, 0, 0],
    ...props,
  }));
  useHelper(ref, BoxHelper, "red");
  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[0.5, 0.5, 0.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_5.geometry}
          material={materials["Material.006"]}
        />
      </group>
    </group>
  );
}

function PhysicsPlane(props) {
  const [ref, api] = usePlane(() => ({
    mass: 1,
    position: [0, 0, 0],
    type: "Static",
    rotation: [-Math.PI / 2, 0, 0],
    scale: [10],
  }));

  // useHelper(ref, PlaneHelper, "blue");

  return (
    <mesh scale={50} ref={ref} receiveShadow dispose={null}>
      <planeGeometry />
      <meshPhongMaterial color="gray" side={THREE.DoubleSide} />
    </mesh>
  );
}

const ThreeModels = () => {
  return (
    <Canvas className="three3d">
      <ambientLight intensity={1} />
      <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Tetra position={[1.2, 2, 0]} /> */}

      <Physics>
        <GltfModels position={[0, 10, 0]} />
        <GltfModels position={[0, 1, 0]} />
        <GltfModels position={[0, 11, 0]} />
        <PhysicsPlane />
        {/* <Cube /> */}
      </Physics>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeModels;
