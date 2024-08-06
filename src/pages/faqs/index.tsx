/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Environment, useProgress, ContactShadows, PresentationControls } from '@react-three/drei';

import { Box, LinearProgress } from '@mui/material';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const metadata = { title: `Post list - ${CONFIG.site.name}` };

export default function Page() {
  // const object = useLoader(FBXLoader, 'http://192.168.1.18:3000/uploads/1L01.fbx');
  const { scene } = useLoader(GLTFLoader, 'http://192.168.1.18:3000/uploads/1L01.glb');
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        maxWidth: 500,
        height: 500,
      }}
    >
      <Suspense fallback={<LinearProgress variant="determinate" value={progress} />}>
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            penumbra={1}
            angle={0.15}
            shadow-mapSize={2048}
            castShadow
          />
          <pointLight position={[1, 1, 1]} />
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
      </Suspense>
    </Box>
  );
}
