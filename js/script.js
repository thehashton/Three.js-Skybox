var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// update viewport on resize
window.addEventListener( 'resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize( width, height );
    camera.aspect = width / height; //aspect ratio
    camera.updateProjectionMatrix();
});

// controls
controls = new THREE.OrbitControls( camera, renderer.domElement);


// creates the shape
var geometry = new THREE.BoxGeometry( 2, 2, 2 );
var cubeMaterials = [
    new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load( 'img/nightsky_rt.png' ), side: THREE.DoubleSide }), //right side
    new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load( 'img/nightsky_lf.png' ), side: THREE.DoubleSide }), //left side
    new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load( 'img/nightsky_dn.png' ), side: THREE.DoubleSide }), //bottom side
    new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load( 'img/nightsky_up.png' ), side: THREE.DoubleSide }), //top side
    new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load( 'img/nightsky_ft.png' ), side: THREE.DoubleSide }), //front side
    new THREE.MeshPhongMaterial({ map: new THREE.TextureLoader().load( 'img/nightsky_bk.png' ), side: THREE.DoubleSide }) //back side
];


//Floor
var floorGeometry = new THREE.CubeGeometry( 10, 1, 10);
var floorMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('img/nightsky_rt.png'), side: THREE.DoubleSide });
var floorCube = new THREE.Mesh( floorGeometry, floorMaterial);
floorCube.position.y = -5;
scene.add( floorCube );

//Ceiling
var ceilingGeometry = new THREE.CubeGeometry( 10, 1, 10);
var ceilingMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('img/nightsky_rt.png'), side: THREE.DoubleSide });
var ceilingCube = new THREE.Mesh( ceilingGeometry, ceilingMaterial);
ceilingCube.position.y = 5;
scene.add( ceilingCube );

//Left Wall
var leftWallGeometry = new THREE.CubeGeometry( 1, 10, 10);
var leftWallMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('img/nightsky_rt.png'), side: THREE.DoubleSide });
var leftWallCube = new THREE.Mesh( leftWallGeometry, leftWallMaterial);
leftWallCube.position.x = -5;
scene.add( leftWallCube );

//Right Wall
var rightWallGeometry = new THREE.CubeGeometry( 1, 10, 10);
var rightWallMaterial = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load('img/nightsky_rt.png'), side: THREE.DoubleSide });
var rightWallCube = new THREE.Mesh( rightWallGeometry, rightWallMaterial);
rightWallCube.position.x = 5;
scene.add( rightWallCube );

// create a material, colour or image texture
// var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: true} );
var material = new THREE.MeshFaceMaterial( cubeMaterials );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Camera Position
camera.position.z = 3;

// lighting
var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 3 );
scene.add( ambientLight );


//game logic
var update = function ( ) {
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.005;
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