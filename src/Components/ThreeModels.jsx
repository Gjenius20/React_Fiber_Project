import { Physics, useBox, usePlane } from "@react-three/cannon";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

useGLTF.preload("testobj.glb");

function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
  return (
    <mesh ref={ref}>
      <boxGeometry />
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

  return (
    <mesh scale={10} ref={ref} receiveShadow>
      <planeBufferGeometry />
      <meshPhongMaterial color="gray" side={THREE.DoubleSide} />
    </mesh>
  );
}

function GravityBox(props) {
  const [ref] = useBox(() => ({
    mass: 10,
    position: position,
    args: [2, 2, 2],
  }));

  return (
    <mesh ref={ref} castShadow>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

const ThreeModels = () => {
  return (
    <Canvas className="w-screen h-screen">
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
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
