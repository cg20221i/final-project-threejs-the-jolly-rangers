import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import Stats from 'three/examples/jsm/libs/stats.module';

let mouseX = 0, mouseY =0;
const BoundaryX = 8;
const BoundaryY = 4;

export default class SceneInit {
  constructor(canvasId) {
    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    //this.scene.background = new THREE.Color( 0xff0000 );

    // NOTE: Camera params;
    this.fov = 45;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    // NOTE: Additional components.
    this.clock = undefined;
    //this.stats = undefined;
    //this.controls = undefined;

    // NOTE: Lighting is basically required.
    this.ambientLight = undefined;
    this.directionalLight = undefined;
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 48;


    // NOTE: Specify a canvas which is already created in the HTML.
    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      // NOTE: Anti-aliasing smooths out the edges.
      antialias: true,
      //alpha: true,
    });
    this.renderer.setClearColor( 0xffffff, 1.0);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    //this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    //this.stats = Stats();
    //document.body.appendChild(this.stats.dom);

    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    // this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);


    // directional light - parallel sun rays
    this.directionalLight = new THREE.DirectionalLight(0x454B1B, 0.6);
    this.directionalLight.position.set(50, 10, 90);
    this.directionalLight.castShadow = true;
    this.directionalLight.shadow.mapSize.width = 512; // default
    this.directionalLight.shadow.mapSize.height = 512; // default
    this.directionalLight.shadow.camera.near = 0.5; // default
    this.directionalLight.shadow.camera.far = 500; // default
    this.scene.add(this.directionalLight);

    const helper = new THREE.CameraHelper(this.directionalLight.shadow.camera);
    this.scene.add(helper);

		document.body.style.touchAction = 'none';
    document.body.addEventListener( 'pointermove', (e) => this.onPointerMove(e) );

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize() , false);

    // NOTE: Load space background.
    this.loader = new THREE.TextureLoader();
    // this.scene.background = this.loader.load('./src/assets/Starbucks.jpg');

    // NOTE: Declare uniforms to pass into glsl shaders.
    // this.uniforms = {
    //   u_time: { type: 'f', value: 1.0 },
    //   colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
    //   colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
    // };
  }

  animate() {
    // NOTE: Window is implied.
    // requestAnimationFrame(this.animate.bind(this));
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    //this.stats.update();
    //this.controls.update();
  }

  render() {
    // NOTE: Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    // this.camera.position.x += ( mouseX - this.camera.position.x ) * 0.0001;

    this.camera.position.x += ( mouseX - this.camera.position.x ) * 0.0001;
    this.camera.position.y += ( - mouseY - this.camera.position.y ) * 0.0001;

    if(this.camera.position.x > BoundaryX){
      this.camera.position.x = BoundaryX;
    }

    if(this.camera.position.x < (-1 * BoundaryX)){
      this.camera.position.x = (-1 * BoundaryX);
    }

    if(this.camera.position.y > BoundaryY){
      this.camera.position.y = BoundaryY;
    }

    if(this.camera.position.y < (-1 * BoundaryY)){
      this.camera.position.y = (-1 * BoundaryY);
    }

    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onPointerMove( event ) {
    if ( event.isPrimary === false ) return;
    mouseX = event.clientX - (window.innerWidth / 2);
    mouseY = event.clientY - (window.innerHeight / 2);
  }
}
