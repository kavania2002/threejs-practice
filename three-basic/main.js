import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0f0f0f);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({
  color: 0x44aa88,
  emissive: 0x44aa88,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light = new THREE.DirectionalLight(0xffff0f, 1);
light.position.set(1, 1, 1);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
