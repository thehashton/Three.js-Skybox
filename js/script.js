var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//create the shape
var geometry = new THREE.BoxGeometry( 1, 1, 1 );


// create a material, colour or image texture
// var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: true} );
var material = new THREE.MeshBasicMaterial( { color: 0xFFFFF, wireframe: true} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Camera Position
camera.position.z = 3;

//game logic
var update = function ( ) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.005;
};

//render logic
var render = function ( ) {
    renderer.render( scene, camera );
};

//run game loop (update, render, repeat)
var GameLoop = function () {
    requestAnimationFrame( GameLoop);
    update();
    render();
};

GameLoop();