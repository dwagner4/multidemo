

let makeObjects = ( scene, world ) => {
  firebase.database().ref('/dynamic').once('value', function (snapshot){
    var hopper = snapshot.val();
    for (var key in hopper) {
      var nextObj = hopper[key];
      var geometry = new THREE.SphereGeometry( 0.5, 32, 32 );
      var material = new THREE.MeshPhongMaterial( { color: Number( nextObj.color ) } );
      var cube = new THREE.Mesh( geometry, material );
      cube.position.set( nextObj.x, nextObj.y, nextObj.z);
      cube.name = key
      scene.add( cube );
    }
  });
}
