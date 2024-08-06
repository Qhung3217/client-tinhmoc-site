/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useGLTF, Environment, ContactShadows, PresentationControls } from '@react-three/drei';

import { Box, Modal, IconButton, LinearProgress } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';

export default function ProductDetal3D() {
  const isOpen = useBoolean();

  return (
    <>
      <IconButton onClick={isOpen.onTrue} color="primary" size="medium">
        <Iconify icon="material-symbols:3d-rotation-outline-rounded" width={28} />
      </IconButton>

      <Suspense fallback={<Loading />}>{isOpen.value && <MD onClose={isOpen.onFalse} />}</Suspense>
    </>
  );
}
function Loading() {
  //   const { progress } = useProgress();

  return (
    <LinearProgress
      variant="indeterminate"
      // value={progress}
    />
  );
}
type MProps = {
  onClose: () => void;
};
function MD({ onClose }: MProps) {
  // const object = useLoader(FBXLoader, 'http://192.168.1.18:3000/uploads/1L01.fbx');
  //   const { scene } = useLoader(GLTFLoader, 'http://192.168.1.18:3000/uploads/1L01.glb');
  const { scene } = useGLTF('http://192.168.1.18:3000/uploads/1L01.glb');

  const content = (
    <Canvas shadows camera={{ position: [0, 1, 10], fov: 25 }}>
      <ambientLight intensity={0.1} />
      <spotLight
        position={[10, 5, 10]}
        penumbra={1}
        angle={0.15}
        shadow-mapSize={2048}
        castShadow
      />
      <pointLight position={[1, 1, 3]} />
      {/* <pointLight position={[0, 1, 2]} color="#fff" intensity={100} />
          <pointLight position={[0, 0, 2]} color="#fff" intensity={100} /> */}
      <PresentationControls
        global
        // snap={{ mass: 4, tension: 1500 }}
        polar={[-Math.PI / 2, Math.PI / 2]}
        rotation={[0, -0.5, 0]}
      >
        <group position={[0, -0.5, 0]} scale={0.01} dispose={null}>
          <primitive object={scene} position={[0, 0, 0]} children-0-castShadow />
        </group>
      </PresentationControls>
      <ContactShadows position={[0, -1, 0]} opacity={0.75} scale={10} blur={3} far={3} />
      <Environment preset="studio" background />
    </Canvas>
  );

  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          backgroundColor: 'white',
          maxWidth: 500,
          height: 500,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {content}
      </Box>
    </Modal>
  );
}
