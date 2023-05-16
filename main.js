import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



const geometry2 = new THREE.ConeGeometry( 2, 1, 32 );
const material2 = new THREE.MeshBasicMaterial( {color: 'blue',wireframe:true} );
const cone = new THREE.Mesh( geometry2, material2 );
scene.add( cone );
cone.position.y=2.05;

const geometry7 = new THREE.BoxGeometry( 0.2, 1.5, 0.2 );
const material7 = new THREE.MeshBasicMaterial( { color: 'green' } );
const cube2 = new THREE.Mesh( geometry7, material7 );
scene.add( cube2 );
cube2.position.y=0.8;
cube2.position.x=0;
cube2.position.z=0;

const geometry = new THREE.BoxGeometry( 0.2, 1, 0.2 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.y=0.51;
cube.position.x=2;
cube.position.z=-2;

const geometry12 = new THREE.CircleGeometry( 0.5, 32 ); 
const material12 = new THREE.MeshBasicMaterial( { color: 'red',wireframe:true } ); 
const circle = new THREE.Mesh( geometry12, material12 ); 
scene.add( circle );
circle.rotation.x = Math.PI / 2;
circle.position.y=1.03;
circle.position.x=2
circle.position.z=-2;





const geometry1 = new THREE.BoxGeometry( 0.2, 1, 0.2 );
const material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube1 = new THREE.Mesh( geometry1, material1 );
scene.add( cube1 );
cube1.position.y=0.51;
cube1.position.x=-2;
cube1.position.z=-2;

const geometry123 = new THREE.CircleGeometry( 0.5, 32 ); 
const material123 = new THREE.MeshBasicMaterial( { color: 'red',wireframe:true } ); 
const circle2 = new THREE.Mesh( geometry123, material123 ); 
scene.add( circle2 );
circle2.rotation.x = Math.PI / 2;
circle2.position.y=1.03;
circle2.position.x=-2
circle2.position.z=-2;

const geometry11 = new THREE.BoxGeometry( 0.2, 1, 0.2 );
const material11 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube11 = new THREE.Mesh( geometry11, material11 );
scene.add( cube11 );
cube11.position.y=0.51;
cube11.position.x=-2;
cube11.position.z=2;

const geometry124 = new THREE.CircleGeometry( 0.5, 32 ); 
const material124 = new THREE.MeshBasicMaterial( { color: 'red',wireframe:true } ); 
const circle3 = new THREE.Mesh( geometry124, material124 ); 
scene.add( circle3 );
circle3.rotation.x = Math.PI / 2;
circle3.position.y=1.03;
circle3.position.x=-2
circle3.position.z=2;



const geometry22 = new THREE.BoxGeometry( 0.2, 1, 0.2 );
const material22 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube22 = new THREE.Mesh( geometry22, material22 );
scene.add( cube22 );
cube22.position.y=0.51;
cube22.position.x=2;
cube22.position.z=1.9;

const geometry125 = new THREE.CircleGeometry( 0.5, 32 ); 
const material125 = new THREE.MeshBasicMaterial( { color: 'red',wireframe:true } ); 
const circle4 = new THREE.Mesh( geometry125, material125 ); 
scene.add( circle4 );
circle4.rotation.x = Math.PI / 2;
circle4.position.y=1.03;
circle4.position.x=2
circle4.position.z=1.9;

const table = new THREE.CircleGeometry( 0.5, 200 ); 
const table1 = new THREE.MeshBasicMaterial( { color: 'purple',wireframe:true } ); 
const circle32 = new THREE.Mesh( table, table1 ); 
scene.add( circle32 );
circle32.rotation.x = Math.PI / 2;
circle32.position.y=0.5;
circle32.position.x=0;




const geometry6 = new THREE.BoxGeometry( 0.3, 0.5, 0.8 );
const material6 = new THREE.MeshBasicMaterial( { color: 'blue' } );
const cube20 = new THREE.Mesh( geometry6, material6 );
scene.add( cube20 );
cube20.position.y=0.3;
cube20.position.x=0.82;
cube20.position.z=0;


const geometry00 = new THREE.BoxGeometry( 0.2, 0.7, 0.7 );
const material00 = new THREE.MeshBasicMaterial( { color: 'red' } );
const cube00 = new THREE.Mesh( geometry00, material00 );
scene.add( cube00 );
cube00.position.y=0.36;
cube00.position.x=0.6;
cube00.position.z=0;
cube00.rotation.z = Math.PI / 2;

const group = new THREE.Group();
group.add( cube20 );
group.add( cube00 );
scene.add( group );
group.position.x=0.5;



const geometry000 = new THREE.BoxGeometry( 0.2, 0.7, 0.7 );
const material000= new THREE.MeshBasicMaterial( { color: 'red' } );
const cube000 = new THREE.Mesh( geometry000, material000 );
scene.add( cube000 );
cube000.position.y=0.36;
cube000.position.x=0;
cube000.position.z=-1.1;
cube000.rotation.z = Math.PI / 2;

const geometry999 = new THREE.BoxGeometry( 0.3, 0.5, 0.8 );
const material999 = new THREE.MeshBasicMaterial( { color: 'blue' } );
const cube999 = new THREE.Mesh( geometry999, material999 );
scene.add( cube999 );
cube999.position.y=0.3;
cube999.position.x=-0;
cube999.position.z=-1.5;
cube999.rotation.y =1.6;



const geometry99 = new THREE.BoxGeometry( 0.3, 0.5, 0.8 );
const material99 = new THREE.MeshBasicMaterial( { color: 'blue' } );
const cube99 = new THREE.Mesh( geometry99, material99 );
scene.add( cube99 );
cube99.position.y=0.3;
cube99.position.x=-0.9;
cube99.position.z=0;


const geometry88 = new THREE.BoxGeometry( 0.2, 0.7, 0.7 );
const material88 = new THREE.MeshBasicMaterial( { color: 'brown' } );
const cube88 = new THREE.Mesh( geometry88, material88 );
scene.add( cube88 );
cube88.position.y=0.36;
cube88.position.x=-0.6;
cube88.position.z=0;
cube88.rotation.z = Math.PI / 2;

const group1 = new THREE.Group();
group1.add( cube99 );
group1.add( cube88 );
scene.add( group1 );
group1.position.x=-0.5;


const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(5, 5),
  new THREE.MeshBasicMaterial({ color: "#B0BEC5", side: THREE.DoubleSide })
);
plane.rotation.x = Math.PI / 2;
scene.add(plane);

const planef = new THREE.Mesh(
	new THREE.PlaneGeometry(2.3, 5),
	new THREE.MeshBasicMaterial({ color: "#B0BEC5", side: THREE.DoubleSide })
  );
  planef.rotation.x = Math.PI / 2;
  scene.add(planef);
  planef.position.y=0.00;
  planef.position.x=1.2;
  planef.position.z=0.9;


camera.position.set(0,2,5);


const geometry13 = new THREE.BoxGeometry( 0.1, 0.3, 5 ); 
    const material13 = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
    const fance = new THREE.Mesh( geometry13, material13 ); 
    scene.add( fance );
	fance.position.x=-2.45;
	fance.position.y=0.14;


	const geometry14 = new THREE.BoxGeometry( 0.1, 0.3, 5 ); 
    const material14 = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
    const fance1 = new THREE.Mesh( geometry14, material14 ); 
    scene.add( fance1 );
	fance1.position.x=2.45;
	fance1.position.y=0.14;

	const geometry15 = new THREE.BoxGeometry( 0.1, 0.3, 5 ); 
    const material15 = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
    const fance2 = new THREE.Mesh( geometry15, material15 ); 
    scene.add( fance2 );
	fance2.position.x=0;
	fance2.position.y=0.14;
	fance2.position.z=-2.5;
	fance2.rotation.y =1.58;

	const geometry16 = new THREE.BoxGeometry( 0.1, 0.3, 2.5 ); 
    const material16 = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
    const fance3 = new THREE.Mesh( geometry16, material16 ); 
    scene.add( fance3 );
	fance3.position.x=-1.25;
	fance3.position.y=0.14;
	fance3.position.z=2.5;
	fance3.rotation.y =1.6;


	
	const geometry17 = new THREE.BoxGeometry( 0.3, 0.3, 2.6 ); 
    const material17 = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
    const fance4 = new THREE.Mesh( geometry17, material17 ); 
    scene.add( fance4 );
	fance4.position.x=1.21;
	fance4.position.y=1.4;
	fance4.position.z=2.5;
	fance4.rotation.y =1.6;


	const geometryg = new THREE.BoxGeometry( 0.2, 1.5, 0.2 );
    const materialg = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cubeg = new THREE.Mesh( geometryg, materialg );
    scene.add( cubeg );
    cubeg.position.y=0.76;
    cubeg.position.x=0;
    cubeg.position.z=2.45;

	const geometryp = new THREE.BoxGeometry( 0.2, 1.5, 0.2 );
    const materialp = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cubep = new THREE.Mesh( geometryp, materialp );
    scene.add( cubep );
    cubep.position.y=0.76;
    cubep.position.x=2.42;
    cubep.position.z=2.45;




const controlers = new PointerLockControls( camera, document.body );

// add event listener to show/hide a UI (e.g. the game's menu)

scene.add(controlers.getObject());

const onkeypress=function(event){

	switch (event.keyCode){
		case 37:
			controlers.moveRight(-1);
			break;
		case 38:
			controlers.moveForward(1);
		    break;
        case 39:
			controlers.moveRight(1);
		    break;
		case 40:
			controlers.moveForward(-1);
			break;
		
	}
}
document.addEventListener("keydown",onkeypress,false);

document.addEventListener("click",function(){
controlers.lock();
});

controlers.addEventListener("unlock",function(){
controlers.enabled=true;
});

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );



const controls = new OrbitControls( camera, renderer.domElement );

controls.update();

function animate() {

	requestAnimationFrame( animate );
	controls.update();
    camera.position.z = 5;
	renderer.render( scene, camera );
}
animate();

function animate() {
	requestAnimationFrame( animate );
	cone.rotation.y += 0.01;
	circle.rotation.z += 0.01;
	circle2.rotation.z += 0.01;
	circle3.rotation.z += 0.01;
	circle4.rotation.z += 0.01;
	
	renderer.render( scene, camera );
}

animate();
