class SlingShot {
    constructor (bodyX,pointY) {
         var options = {
            bodyA : bodyX,
            pointB : pointY,
            stiffness : 0.02,
            length : 50
        }
        this.slingShot = new Constraint.create (options);
        World.add(myWorld,this.slingShot);
    }

    display () {
        if(this.slingShot.bodyA != null){
            var point1 = this.slingShot.bodyA.position;
            var point2 =  this.slingShot.pointB;
            strokeWeight(5);
            line(point1.x,point1.y,point2.x,point2.y);

        }
        
    }

    release()  {

     this.slingShot.bodyA = null;

    }


}