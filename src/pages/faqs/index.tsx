import * as THREE from 'three';
import { useRef, useState, useEffect } from 'react';
import { useUnityContext } from 'react-unity-webgl';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const metadata = { title: `Post list - ${CONFIG.site.name}` };

export default function Page() {
  const baseURL = 'http://192.168.1.18:3000/uploads/3DPhanUngNitroHoaBenzene';
  const [state, setState] = useState({
    loaderUrl: '',
    dataUrl: '',
    frameworkUrl: '',
    codeUrl: '',
  });
  const { unityProvider } = useUnityContext({
    ...state,
  });

  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function get() {
      // const loader = await fetch(`${baseURL}.loader.js`, {
      //   method: 'GET',
      //   headers: {
      //     Accept: 'application/octet-stream',

      //     'Access-Control-Allow-Origin': '*',
      //   },
      // });
      // const data = await fetch(`${baseURL}.data`, {
      //   method: 'GET',
      //   headers: {
      //     Accept: 'application/octet-stream',
      //     'Access-Control-Allow-Origin': '*',
      //   },
      // });
      // const framework = await fetch(`${baseURL}.framework.js`, {
      //   method: 'GET',
      //   headers: {
      //     Accept: 'application/octet-stream',
      //     'Access-Control-Allow-Origin': '*',
      //   },
      // });
      // const wasm = await fetch(`${baseURL}.wasm`, {
      //   method: 'GET',
      //   headers: {
      //     Accept: 'application/octet-stream',
      //     'Access-Control-Allow-Origin': '*',
      //   },
      // });

      // const loaderBlob = await loader.blob();
      // const dataBlob = await data.blob();
      // const frameworkBlob = await framework.blob();
      // const codeBlob = await wasm.blob();
      // setState({
      //   loaderUrl: URL.createObjectURL(loaderBlob),
      //   dataUrl: URL.createObjectURL(dataBlob),
      //   frameworkUrl: URL.createObjectURL(frameworkBlob),
      //   codeUrl: URL.createObjectURL(codeBlob),
      // });
      // console.log(state);
      const mount = mountRef.current;
      if (!mount) return;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mount.appendChild(renderer.domElement);

      // Add lights
      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      light.position.set(0.5, 1, 0.75);
      scene.add(light);

      // Load the GLTF model
      const gltfloader = new GLTFLoader();

      const glb = await fetch(`http://192.168.1.18:3000/uploads/Duck.glb`, {
        method: 'GET',
        headers: {
          Accept: 'application/octet-stream',
          'Access-Control-Allow-Origin': '*',
        },
      });
      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      const glbblob: string = await glb.blob();
      gltfloader.load(
        glbblob,
        (gltf) => {
          scene.add(gltf.scene);
          animate();
        },
        undefined,
        (error) => {
          console.error('An error happened', error);
        }
      );
    }
    get();
  }, [mountRef]);

  return (
    <Box
      sx={{
        backgroundColor: 'white',
      }}
    >
      <div ref={mountRef} />
    </Box>
  );
}
