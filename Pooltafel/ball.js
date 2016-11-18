/**
 * Created by Ben on 14-10-2016.
 */
class Ball extends THREE.Mesh
{
    constructor(x,z,color)
    {
        var bGeometry = new THREE.SphereGeometry(0.4,20,20);
        var bMaterial = new THREE.MeshPhongMaterial({color: color});
        super(bGeometry, bMaterial);
        scene.add(this);
        this.xPos = x;
        this.zPos = z;
        this.xSpeed = 0.0;
        this.zSpeed = 0.0;
        this.position.y = 9;
        this.receiveShadow = true;
        this.castShadow = true;
        this.color = color;
    }


}