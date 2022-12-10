import React from "react";
import { useEffect } from 'react';
import * as THREE from 'three';
import SceneInit from '../lib/SceneInit';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function ThreeCanvas() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    let loadedModel;
    const glftLoader = new OBJLoader();
    glftLoader.load('./src/assets/tumbler/StrBucks.obj', (objScene) => {
      loadedModel = objScene;

      objScene.scene.rotation.y = Math.PI / 8;
      objScene.scene.position.y = 3;
      objScene.scene.scale.set(10, 10, 10);
      test.scene.add(objScene.scene);
    });

    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y += 0.01;
        loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);
    
      return (
        <div className="flex">
        <div className="m-auto">
          <canvas id="myThreeJsCanvas" className="-z-50 pl-16 inset-0 fixed"/>
        </div>
      </div>
      );
}

export default ThreeCanvas;
