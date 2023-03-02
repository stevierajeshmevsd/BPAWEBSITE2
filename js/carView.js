import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

var selectFeature;

const jsonSearch = (obj, value) => {
    const found = []
    for (let key in obj) {
        
        if (obj[key].name === value) {
            found.push(obj[key])
            
        }
        

    }
    return found;
}


window.onload = function() {

    const container = document.getElementById('containerCar');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement)

    var gltfLoader = new GLTFLoader();

    const openAng = Math.PI * 1.77

    const carInteractions = [
        {
            "property": "rDoor",
            "rotation": new THREE.Euler(0, 0, -openAng)
        },
        {
            "property": "lDoor",
            "rotation": new THREE.Euler(0, 0, openAng)
        },
        {
            "property": "hood",
            "rotation": new THREE.Euler(openAng, 0, 0)
        }
    ]

    const cars = [
        {
            "trim": "sedan",
            "url": "../3d/sedan.gltf"
        },
        {
            "trim": "type1",
            "url": "../3d/carReg.gltf"
        },
        {
            "trim": "pickup",
            "url": "../3d/pickup.gltf"
        },
        {
            "trim": "jeep",
            "url": "../3d/jeep.gltf"
        },
        {
            "trim": "minivan",
            "url": "../3d/minivan.gltf"
        }
    ]
    
    var carInteractables;

    async function DefineCar(trim, color) {
        let car = cars.find(obj => obj.trim === trim);

        return new Promise((resolve) => {
            gltfLoader.load(car.url, function (object) {
            
                let carObj = object.scene;
                
                carObj.interactables = [];

                const carChildren = carObj.children[0].children



                carInteractions.forEach( interaction => {
                    let query = jsonSearch(carChildren, interaction.property)
                    
                    if(!query) {return;}
                    
                    

                    query[0].openRot = new THREE.Quaternion().setFromEuler(interaction.rotation);
                    query[0].tarRot = new THREE.Quaternion().setFromEuler(query[0].rotation.clone());

                    
                    
                })
                

                carChildren.filter(child => child.name in carInteractions).forEach( element => {
                    let child = carChildren[element.id]
                    car.interactive.pop(child)
                    
                    child.openRot = new THREE.Quaternion().setFromEuler(element.angle);
                    child.tarRot = child.rotation.clone();
                })

                carInteractables = carObj.children[0].children.filter(child => Boolean(child.tarRot))
                
                

                resolve(carObj);
            })
        })

        

    }

    

    

    


    /*
    mtlLoader.load("3d/carObj.mtl", function(materials) {

        materials.getAsArray()[0] = new THREE.MeshBasicMaterial({color:0xffffff})


        materials.preload();
        console.log(materials.getAsArray()[0])
        objLoader.setMaterials(materials);
        objLoader.load("3d/car1.obj", function(object) {


            carObj = object;
            carObj.rotation.x = Math.PI * 2.05
            carObj.children.forEach(child => {
                console.log(child)
                child.tarRot = new THREE.Euler().copy(child.rotation);
            })
            scene.add(carObj);

            render()

        });

    });
    */

    async function playAnimation(object, properties) {
        
        object.interactables

    }

    //const carObj = new THREE.Mesh(geometry, material);
    const ambience = new THREE.AmbientLight(0x7B56FF, .75);
    const light = new THREE.PointLight(0xffffff, 1, 500);

    const raycaster = new THREE.Raycaster();

    light.position.set(2, 30, 4);
    
    camera.position.set(0,3,30);
    scene.add(ambience);
    scene.add(light);
    scene.add(camera);

    const controls = new OrbitControls( camera, renderer.domElement);

    const rotateAuto = 2.5
    const rotateAutoSlow = rotateAuto / 2

    controls.enableDamping = true;
    controls.dampingFactor = .04

    controls.autoRotate = true;
    controls.autoRotateSpeed = rotateAuto;

    controls.enablePan = false;
    controls.enableZoom = false;

    controls.maxPolarAngle = Math.PI *.5;
    controls.minPolarAngle = Math.PI *.2;

    var carModel;
    DefineCar("type1", 0xffffff).then(carObj => {
        carModel = carObj;
        scene.add(carModel)
        render();
    });


    


    function render() {
        requestAnimationFrame(render);
        //carObj.rotation.y += .001
        //console.log(carObj)
        //carObj.children.forEach(child => {
        //    console.log(new THREE.Vector3(child.tarRot))
        //    child.rotation.set(tweenLinear3D(child.tarRot, child.rotation.clone(), 15))
        //})
       
        carInteractables.forEach( child => {
            child.quaternion.slerp(child.tarRot, 0.1)
        })

        controls.update();
        

        renderer.render(scene, camera);
    }


window.addEventListener("resize", function() {
    renderer.setSize(container.clientWidth, container.clientHeight);
    
});

var intersects = [];

window.addEventListener("mousemove", function(event) {
    // Get the mouse position in document coordinates
    var mouseX = event.offsetX;
    var mouseY = event.offsetY;

    // Get the position of the canvas element
    const canvasRect = container.getBoundingClientRect();

    // Calculate the mouse position relative to the canvas element
    const mouse = new THREE.Vector2(); 
    
        mouse.x = ((mouseX) / canvasRect.width) * 2 - 1;
        mouse.y = -((mouseY) / canvasRect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    if(!carModel) {return;}

    if(Boolean(intersects[0])) {intersects[0].object.tarRot = new THREE.Quaternion().setFromEuler(0, 0, 0)}

    intersects = raycaster.intersectObjects(carInteractables);

    

    if(!intersects[0]) {return;}

    intersects[0].object.tarRot = intersects[0].object.openRot.clone();


    /*
    const intersects = raycaster.intersectObjects(carObj.children[0].children);
    console.log(intersects)

    intersects[0].object.tarRot = new THREE.Euler(0, 0, 0);

    if(!intersects[0] in carInteractive) {selectFeature.tarRot = new THREE.Quaternion(); return;}

    //if (selectFeature != intersects[0] && selectFeature) { selectFeature.tarRot = new THREE.Quaternion(); controls.autoRotateSpeed = rotateAuto}

    controls.autoRotateSpeed = rotateAutoSlow
    selectFeature = intersects[0].object
    selectFeature.tarRot = selectFeature.openRot
    */

    //const intersects = raycaster.intersectObjects(carModel.children[0].children)
    //const interactables = intersects.filter(obj => obj.tarRot == null)
    //console.log(interactables)

})

}
