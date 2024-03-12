
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TankTopModel from './TankTopModel';

const ProductModel = ({ selectedColor }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <TankTopModel selectedColor={selectedColor} />
      <OrbitControls />
    </Canvas>
  );
};

export default ProductModel;
