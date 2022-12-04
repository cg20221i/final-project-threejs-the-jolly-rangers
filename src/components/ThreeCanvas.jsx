import React from "react";
import { useEffect } from 'react';
import * as THREE from 'three';
import SceneInit from '../lib/SceneInit';

function ThreeCanvas() {
    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();
    
        const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
        const boxMaterial = new THREE.MeshNormalMaterial();
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    
        test.scene.add(boxMesh);
      }, []);
    
      return (
        <div className="flex">
        <div className="m-auto">
          <canvas id="myThreeJsCanvas" className="-z-50 pl-16 inset-0"/>
        </div>
      </div>
      );
}

export default ThreeCanvas;
