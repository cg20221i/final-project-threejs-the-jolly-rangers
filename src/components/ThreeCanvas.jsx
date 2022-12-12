import { useEffect } from 'react';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js'
import { TextureLoader, LoadingManager } from 'three';
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
    // plane.castShadow = true;
    // plane.rotation.x = Math.PI / -2.0;
    // plane.position.y = -12;
    // plane.position.x = 40;
    // test.scene.add( plane );

    const particlesCount = 1000
    const positions = new Float32Array(particlesCount * 3)

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      color: '#16a34a',
      sizeAttenuation: true,
      size: 0.2
  })
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    const particles2 = new THREE.Points(particlesGeometry, particlesMaterial)
    for(let i = 0; i < particlesCount; i++)
    {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = Math.random()
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    particles.position.y = -20;
    particles2.position.y = -10;
    particles.rotation.x = Math.PI / -2.0;
    particles2.rotation.x = Math.PI / 2.0;
    
    test.scene.add(particles);
    test.scene.add(particles2);



    let loadedModel;
    let textureLoader = new TextureLoader().load('./src/assets/texture-set/Text2.png');
    const glftLoader = new GLTFLoader();
    glftLoader.load('./src/assets/tumbler/StrBucks.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      // console.log(loadedModel);
      gltfScene.scene.castShadow = true;
      gltfScene.scene.receiveShadow = true;
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

    let CurrentSection = 1;


    const listenToScroll = () => {
      let SectionHeight = document.documentElement.clientHeight;
      let ScrollPadding = document.documentElement.clientHeight * 0.1;
      const winScroll =document.body.scrollTop || document.documentElement.scrollTop;
     
  
      if (winScroll < ((SectionHeight*1)-ScrollPadding)) {
        loadedModel.scene.scale.set(4, 4, 4);
      }
      else if (winScroll < ((SectionHeight*2)-ScrollPadding)) {
        loadedModel.scene.scale.set(5, 5, 5);
      }
      else if (winScroll < ((SectionHeight*3)-ScrollPadding)) {
        loadedModel.scene.scale.set(4.5, 4.5, 4.5);
      }
      else if (winScroll < ((SectionHeight*4)-ScrollPadding)) {
        loadedModel.scene.scale.set(4, 4, 4);

      }
      else if (winScroll < ((SectionHeight*5)-ScrollPadding)){
        

      }else{
        // console.log("idle")
      }
    };

    window.addEventListener("scroll", listenToScroll);

    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.z += 0.005;
      }

      particles.position.x = test.camera.position.x * 0.5;
      particles.position.y = test.camera.position.y * 0.5;

      particles2.position.x = test.camera.position.x * 0.2;
      particles2.position.y = test.camera.position.y * 0.2;

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