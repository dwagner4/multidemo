
function makeBackground (scene, world) {
  var theplane = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
  theplane.rotation.x = - Math.PI / 2;
  theplane.receiveShadow = true;
  scene.add(theplane);

  var grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  scene.add(grid);

  // make cudes from database
  firebase.database().ref('/static').once('value', function (snapshot){
    var hopper = snapshot.val();
    for (var key in hopper) {
      var nextObj = hopper[key];
      var geometry = new THREE.BoxGeometry( nextObj.scale.x, nextObj.scale.y, nextObj.scale.z );
      var material = new THREE.MeshPhongMaterial( { color: Number( nextObj.color ) } );
      var cube = new THREE.Mesh( geometry, material );
      cube.position.set( nextObj.position.x, nextObj.position.y, nextObj.position.z);
      cube.name = key
      scene.add( cube );
    }
  });
}
