class Mango{
    constructor(x,y,r){
        var options=(
            isStatic=true,
            restitution=0,
            friction=1
        )
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("images/mango.png");
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
    display(){
        var mangopos=this.body.position;
        push()
        translate(mangopos.x,mangopos.y);
        rotate(this.body.angle)
        fill(255,0,255)
        ImageMode(CENTER);
        image(this.image,0,this.r*2)
        pop()
    }
}