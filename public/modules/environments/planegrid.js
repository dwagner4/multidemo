
function makeBackground (scene, world) {
  var theplane = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
  theplane.rotation.x = - Math.PI / 2;
  theplane.receiveShadow = true;
  scene.add(theplane);

  var grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  scene.add(grid);
}
