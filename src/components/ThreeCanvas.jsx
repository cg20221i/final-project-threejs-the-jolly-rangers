import { useEffect } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from '../lib/SceneInit';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    

    // const geometry = new THREE.PlaneGeometry( 100, 100 );
    // const material = new THREE.MeshPhongMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
    // const plane = new THREE.Mesh( geometry, material );
    // plane.receiveShadow = true;
    // plane.rotation.x = Math.PI / -2.0;
    // plane.position.y = -13;
    // plane.position.x = 40;
    // test.scene.add( plane );


    let loadedModel;
    let textureLoader = new TextureLoader().load('./src/assets/texture-set/Text2.png');
    const glftLoader = new GLTFLoader();
    glftLoader.load('./src/assets/tumbler/StrBucks.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      // console.log(loadedModel);
      gltfScene.scene.castShadow = true;
      gltfScene.scene.rotation.x = Math.PI / -2.0;
      gltfScene.scene.position.y = -12;
      gltfScene.scene.position.x = 18;
      gltfScene.scene.scale.set(4, 4, 4);
      gltfScene.scene.traverse(function(node){
        if(node instanceof THREE.Mesh){
          node.material.map = textureLoader;
        }
      });
      test.scene.add(gltfScene.scene);
    });

    // test.scene.add(ParticleGenerator());

    document.getElementById('texture-1').addEventListener('mouseup',function(){
      loadedModel.scene.traverse(function(node){
        if(node instanceof THREE.Mesh){
          node.material.map = new TextureLoader().load('./src/assets/texture-set/Text1.png');
        }
      });
    })

    document.getElementById('texture-2').addEventListener('mouseup',function(){
      loadedModel.scene.traverse(function(node){
        if(node instanceof THREE.Mesh){
          node.material.map = new TextureLoader().load('./src/assets/texture-set/Text2.png');
        }
      });
    })

    document.getElementById('texture-3').addEventListener('mouseup',function(){
      loadedModel.scene.traverse(function(node){
        if(node instanceof THREE.Mesh){
          node.material.map = new TextureLoader().load('./src/assets/texture-set/Text3.png');
        }
      });
    })

    document.getElementById('texture-4').addEventListener('mouseup',function(){
      loadedModel.scene.traverse(function(node){
        if(node instanceof THREE.Mesh){
          node.material.map = new TextureLoader().load('./src/assets/texture-set/Text4.png');
        }
      });
    })

    document.getElementById('texture-5').addEventListener('mouseup',function(){
      loadedModel.scene.traverse(function(node){
        if(node instanceof THREE.Mesh){
          node.material.map = new TextureLoader().load('./src/assets/texture-set/Text5.png');
        }
      });
    })

    document.getElementById('texture-6').addEventListener('mouseup',function(){
      loadedModel.scene.traverse(function(node){
        if(node instanceof THREE.Mesh){
          node.material.map = new TextureLoader().load('./src/assets/texture-set/Text6.png');
        }
      });
    })


    const animate = () => {
      if (loadedModel) {
        //loadedModel.scene.rotation.x += 0.01;
        //loadedModel.scene.rotation.y += 0.01;
        loadedModel.scene.rotation.z += 0.005;
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