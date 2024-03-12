import { useRef, useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'; // Import THREE object

const TankTopModel = ({ selectedColor }) => {
  const group = useRef();

  const { nodes } = useLoader(GLTFLoader, '/TankTop.gltf');

  const material = useMemo(() => {
    return new THREE.MeshStandardMaterial({ color: selectedColor });
  }, [selectedColor]);

  // Traverse through all the nodes to update material color
  const updateMaterialColors = (node) => {
    if (node.isMesh) {
      node.material = material;
    }
    if (node.children) {
      node.children.forEach((child) => {
        updateMaterialColors(child);
      });
    }
  };

  // Call the function for the root node
  updateMaterialColors(nodes.Scene);

  return (
    <group ref={group}>
      <primitive object={nodes.Scene} />
    </group>
  );
};

export default TankTopModel;
