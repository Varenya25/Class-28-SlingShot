class Bird extends BaseClass {
    constructor (x,y) {
        super (x,y,50,50);
        this.image = loadImage ("Images/bird.png");
    }
    display () {
       //this.body.position.x = mouseX;
       //this.body.position.y = mouseY;
        super.display ();
    }

}

/*
class Bird {
    constructor (x,y) {
        var bird_options = {
            restitution : 0.5,
            friction : 1.0,
            density : 1.
          }
          this.width = 50 ;
          this.height = 50 ;
          this.image = loadImage("Images/bird.png");
          this.body = Bodies.rectangle (x,y,this.width,this.height, bird_options);
          World.add (myWorld, this.body);
          console.log (this.body);

    }

    display () {
        var Pos = this.body.position;
        Pos.x = mouseX;
        Pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(Pos.x, Pos.y);
        angleMode (RADIANS)
        rotate(angle);
        //rectMode (CENTER);
        //fill("red");
        //strokeWeight(4);
        //stroke("lightPink");
        //rect (0, 0, this.width,this.height);
        imageMode (CENTER);
        image (this.image, 0,0, this.width, this.height);
        pop();
    }
}
*/