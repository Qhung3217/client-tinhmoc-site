/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ErrorBoundary } from 'react-error-boundary';
import { useGLTF, Environment, ContactShadows, PresentationControls } from '@react-three/drei';

import { Modal, IconButton, Typography, LinearProgress } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from 'src/components/iconify';
import { MuiBox } from 'src/components/@mui/mui-box';
import { ConfirmDialog } from 'src/components/custom-dialog';

type Props = {
  link3d: string | undefined | null;
};
export default function ProductDetal3D({ link3d }: Props) {
  const isOpen = useBoolean();
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!link3d || !link3d.toLowerCase().endsWith('.glb')) return <></>;

  return (
    <>
      <IconButton
        onClick={isOpen.onTrue}
        color="primary"
        size="medium"
        sx={{
          bgcolor: (theme: any) => varAlpha(theme.vars.palette.grey['900Channel'], 0.48),
          '&:hover': {
            bgcolor: (theme: any) => varAlpha(theme.vars.palette.grey['900Channel'], 0.56),
          },
        }}
      >
        <Iconify icon="material-symbols:3d-rotation-outline-rounded" width={28} />
      </IconButton>
      <ErrorBoundary fallback={<ModalError />}>
        <Suspense fallback={<Loading />}>
          {isOpen.value && <MD onClose={isOpen.onFalse} link3d={link3d} />}
        </Suspense>
      </ErrorBoundary>
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
  link3d: string;
};
function MD({ onClose, link3d }: MProps) {
  // const object = useLoader(FBXLoader, 'http://192.168.1.18:3000/uploads/1L01.fbx');
  //   const { scene } = useLoader(GLTFLoader, 'http://192.168.1.18:3000/uploads/1L01.glb');
  const { scene } = useGLTF(link3d);

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
      <MuiBox
        sx={{
          backgroundColor: 'white',
          maxWidth: 500,
          width: '80%',
          height: 500,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {content}
      </MuiBox>
    </Modal>
  );
}

function ModalError() {
  const open = useBoolean(true);
  return (
    <ConfirmDialog
      open={open.value}
      title={
        <Typography color="error" variant="h6">
          Đã có lỗi xảy ra!
        </Typography>
      }
      content="Đã xảy ra lỗi khi xử lý dữ liệu 3D!"
      // eslint-disable-next-line react/jsx-no-useless-fragment
      action={<></>}
      onClose={open.onFalse}
      disableEscapeKeyDown
      disableRestoreFocus
    />
  );
}
