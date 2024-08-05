import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import axios from 'axios';

// const App = () => {
//     const [accessToken, setAccessToken] = useState(null);
//     const [modelData, setModelData] = useState(null);
  
//     useEffect(() => {
//       if (accessToken) {
//         fetchModel(accessToken, 'model-id').then(setModelData);
//       }
//     }, [accessToken]);
  
//     return (
//       <div>
//         {!accessToken ? (
//           <button onClick={handleLogin}>Login with SketchUp</button>
//         ) : (
//           <ModelViewer modelData={modelData} />
//         )}
//       </div>
//     );
//   };


  export default function ModelViewer ({ modelData }) {
    const mountRef = useRef(null);
  
    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
  
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
  
      camera.position.z = 5;
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
  
      return () => {
        mountRef.current.removeChild(renderer.domElement);
      };
    }, [modelData]);
  
    return <div ref={mountRef} />;
  };

  const fetchModel = async (accessToken, modelId) => {
    try {
      const response = await axios.get(`https://api.sketchup.com/v1/models/${modelId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching model:', error);
      return null;
    }
  };

// test('renders model viewer', () => {
//     const modelData = { dimensions: { width: 1, height: 1, depth: 1 } };
//     render(<ModelViewer modelData={modelData} />);
//     expect(screen.getByTestId('model-viewer')).toBeInTheDocument();
//   });

