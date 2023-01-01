import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';


function Sphere() {
    return (
      <mesh>
        <sphereGeometry attach="geometry" radius={8} />
        <meshBasicMaterial attach="material" color={'#00BFFF'} />
      </mesh>
    );
  }

  function Globe() {
    return (
      <Canvas>
        <Sphere />
      </Canvas>
    );
  }
  
  export default Globe;