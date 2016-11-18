/**
 * Created by Ruud on 18-11-2016.
 */

/**
 * Created by Ben on 14-10-2016.
 */
class Hole extends THREE.Mesh
{
    constructor(x,z)
    {
        var hGeometry = new THREE.BoxGeometry(1,1,1);
        var hMaterial = new THREE.MeshPhongMaterial({color: 0x000000});
        super(hGeometry, hMaterial);
        //scene.add(this);
        this.position.x = x;
        this.position.z = z;
        this.position.y = 10;
    }


}
