
let attachControls = (camera) => {

  camera.position.set( 10, 20, 30 );

  var controls = new THREE.OrbitControls( camera );
  controls.target.set( 0, 1, 0 );
  controls.update();
}
