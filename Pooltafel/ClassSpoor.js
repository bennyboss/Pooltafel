/**
 * Created by Ben on 24-10-2016.
 */

class Spoor extends THREE.Mesh
{
    constructor(x,y,z,color)
    {
        var rwGeometry = new THREE.BoxGeometry(0.12,0.142,162.5);
        var rwMaterial = new THREE.MeshPhongMaterial( { color: 0x99FF99 } );
        super(rwGeometry, rwMaterial);
        scene.add(this);
        this.position.x = x;
        this.position.y = y;
    }
}