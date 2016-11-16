/**
 * Created by Ben on 14-10-2016.
 */
class Ball extends THREE.Mesh
{
    constructor(x,z,color)
    {
        var bGeometry = new THREE.SphereGeometry(0.5,20,20);
        var bMaterial = new THREE.MeshPhongMaterial({color: color || 0xff0000});
        super(bGeometry, bMaterial);
        borderGroup.add(this);
        this.position.x = x;
        this.position.z = z;
        this.position.y = 9;
        this.receiveShadow = true;
        this.castShadow = true;
    }


}