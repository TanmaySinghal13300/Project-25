class Box{
    constructor(x,y,width,height){
        var option10={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option10)
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png");
        World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    push()
    translate(pos.x,pos.y)
    fill("red");
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop()
    }
}