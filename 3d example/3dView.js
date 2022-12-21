
window.onload = function() {
// Set up the scene, camera, and renderer
const container = document.getElementById('container');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Create a white cube and add it to the scene
const size = 1; // size of the cube
const geometry = new THREE.BoxGeometry(size, size, size);
const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
const light = new THREE.PointLight(0xffffff, 1, 100);
const raycaster = new THREE.Raycaster();
light.position.set(0, 5, 5);
scene.add(light);
scene.add(cube);

// Position the camera so that it is looking at the cube

camera.position.z = 2;

// Render the scene
function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
window.addEventListener("resize", function() {
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
render();
window.addEventListener("mousemove", function(event) {
    // Get the mouse position in document coordinates
    var mouseX = event.pageX;
    var mouseY = event.pageY;

    // Get the position of the canvas element
    const canvasRect = container.getBoundingClientRect();

    // Calculate the mouse position relative to the canvas element
    const mouse = new THREE.Vector2(); 
    
        mouse.x = ((mouseX - canvasRect.left) / canvasRect.width) * 2 - 1;
        mouse.y = -((mouseY - canvasRect.top) / canvasRect.height) * 2 + 1;

    this.document.getElementById('mouseTXT').innerText="X: " + String(mouse.x) + "\nY: " + String(mouse.y);
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);
    ;

    if (intersects <= 0) {cube.material.color.set(0x00ff00); return;}
    cube.material.color.set(0xff0000);
    const body = intersects[0].object.rotation;
    const facet = intersects[0].face.normal;
    facet.x = facet.angleto
    this.document.getElementById('rayTXT').innerText="Regular: " + String(facet) + "\nx: " + String(facet.x) + "\ny: " + String(facet.y) + "\nz: " + String(facet.z);
    
})
};

