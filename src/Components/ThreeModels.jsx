import { Physics, useBox, usePlane } from "@react-three/cannon";
import { OrbitControls, useGLTF, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { BoxHelper, SpotLightHelper } from "three";

useGLTF.preload("testobj.glb");

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
  const ref = useRef();
  const { nodes, materials } = useGLTF("./testobj.glb");
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        scale={5}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Material.002"]}
        position={[0, 1.9, 0]}
        rotation={[1, 1, 1]}
        scale={0.8}
      />
    </group>
  );
}

function PhysicsPlane(props) {
  const [ref, api] = usePlane(() => ({
    mass: 1,
    position: [0, 0, 0],
    type: "Static",
    rotation: [-Math.PI / 2, 0, 0],
  }));

  // useHelper(ref, PlaneHelper, "blue");

  return (
    <mesh scale={10} ref={ref} receiveShadow dispose={null}>
      <planeBufferGeometry />
      <meshPhongMaterial color="gray" side={THREE.DoubleSide} />
    </mesh>
  );
}

const ThreeModels = () => {
  return (
    <Canvas className=" w-screen h-screen invisible lg:visible">
      <ambientLight intensity={1} />
      <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Tetra position={[1.2, 2, 0]} /> */}

      {/* <GltfModels /> */}
      <Physics>
        <PhysicsPlane />
        <Cube />
      </Physics>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeModels;
