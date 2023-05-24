import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as  THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  mixer!: THREE.AnimationMixer;

  ngOnInit(){
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
 // Configurar el renderizador con canal alfa
 const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true,
});

// Configurar el tamaño de renderizado
const pixelRatio = window.devicePixelRatio;
const width = canvas.clientWidth * pixelRatio;
const height = canvas.clientHeight * pixelRatio;
renderer.setSize(width, height);

// Crear la escena, la cámara y las luces
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

// Cargar el modelo .gltf
const loader = new GLTFLoader();
loader.load('assets/img/scene.gltf', (gltf) => {
  const avatar = gltf.scene;
  scene.add(avatar);
    // Obtener la animación del modelo
    const animations = gltf.animations;
    if (animations && animations.length > 0) {
      // Crear un mezclador de animaciones
      const mixer = new THREE.AnimationMixer(avatar);
  
      // Activar la primera animación
      const action = mixer.clipAction(animations[0]);
      action.play();
    }
  

  // Ajustar la posición, escala o rotación de tu avatar según sea necesario
  avatar.position.set(0, 0, 0);
  avatar.scale.set(1, 1, 1);
  avatar.rotation.set(0, 0, 0);


  // Añadir los controles de órbita (OrbitControls)
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Habilitar amortiguación para movimientos suaves
  controls.dampingFactor = 0.1; // Ajustar el factor de amortiguación
  controls.rotateSpeed = 0.5; // Ajustar la velocidad de rotación

  // Renderizar la escena
  function animate() {
    requestAnimationFrame(animate);

    // Actualizar los controles de órbita
    controls.update();

    // Renderizar la escena
    renderer.render(scene, camera);
  }
  animate();
});
  
  }
  
  title = 'portafolio';
}
