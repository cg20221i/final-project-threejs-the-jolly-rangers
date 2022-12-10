import { useEffect } from 'react';

import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from '../lib/SceneInit';

function ParticleGenerator(){
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  const sprite = new THREE.TextureLoader().load( './src/assets/disc.png' );

  for ( let i = 0; i < 10000; i ++ ) {

    const x = 2000 * Math.random() - 1000;
    const y = 2000 * Math.random() - 1000;
    const z = 2000 * Math.random() - 1000;

    vertices.push( x, y, z );

  }

  geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

  material = new THREE.PointsMaterial( { size: 35, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
  material.color.setHSL( 1.0, 0.3, 0.7 );

  return new THREE.Points( geometry, material );
}

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('./src/assets/tumbler/StrBucks.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      // console.log(loadedModel);

      gltfScene.scene.rotation.x = Math.PI / -2.0;
      gltfScene.scene.position.y = -12;
      gltfScene.scene.position.x = 18;
      gltfScene.scene.scale.set(4, 4, 4);
      test.scene.add(gltfScene.scene);
    });

    //test.scene.add(ParticleGenerator());


    const animate = () => {
      if (loadedModel) {
        //loadedModel.scene.rotation.x += 0.01;
        //loadedModel.scene.rotation.y += 0.01;
        loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" className="fixed h-screen -z-50 pl-16 inset-0"/>
    </div>
  );
}

export default App;