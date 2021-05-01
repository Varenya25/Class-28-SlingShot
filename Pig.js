class Pig extends BaseClass {
    constructor (x,y) {
        super (x,y,50,50);
        this.image = loadImage ("Images/enemy.png");
    }
}

/*
class Pig {
    constructor (x,y) {
        var Pig_options = {
            restitution : 0.8,
            friction : 0.3,
            density : 1.0
          }
          this.width = 50 ;
          this.height = 50 ;
          this.body = Bodies.rectangle (x,y,this.width,this.height, Pig_options);
          World.add (myWorld, this.body);
          console.log (this.body);

    }

    display () {
        var Pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(Pos.x, Pos.y);
        angleMode (RADIANS)
        rotate(angle);
        rectMode (CENTER);
        fill("lightPink");
        rect (0, 0, this.width,this.height);
        pop();    
    }
    */
