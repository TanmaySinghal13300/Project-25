class Paper {
    constructor(x, y) {
      var options = {
         
          restitution:0.8,
          friction:0.5,
          density:1.0
      }
      this.body = Bodies.circle(x, y, 24, options);
      this.r=24;
      this.image=loadImage("paper.png");
      this.scale=0.5;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("purple");
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
      pop()
    }
  };
  