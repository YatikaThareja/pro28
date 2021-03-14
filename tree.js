class Tree {
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dustbinWidth=450;
        this.dustbinHeight=600;
        this.wallThickness=18;
//images
        this.image=loadImage("imagee/tree.png");
        this.bottomBody=bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
        this.leftWallBody=bodies.rectangle(0,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinWidth)
        this.rightWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y,this.dustbinWidth/2,this.wallThickness)

        World.add(world,bottomBody)
        World.add(world,leftWallBody)
        World.add(world,rightWallBody)
    }
    display(){
        var PosBottom=this.bottomBody.position;
        push()
        translate(PosBottom.x,PosBottom.y=10);
        fill(255)
        ImageMode(CENTER);
        image(this.image,0,this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight)
        pop()
    }

}