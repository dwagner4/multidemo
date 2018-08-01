
let attachControls = (camera) => {
  // camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
  // camera.position.set( 10, 20, 30 );
  // console.log( camera );

  camera.position.set( 10, 20, 30 );

  var controls = new THREE.OrbitControls( camera );
  controls.target.set( 0, 1, 0 );
  controls.update();
}
