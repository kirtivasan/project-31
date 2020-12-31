class Plinko {
    constructor(x,y){
        var games={
            restitution:0,
            fricton:0.5,
            density:10,
            isStatic:true
    }
     this.body=Bodies.circle(x,y,35,games);
     this.width=35;
     World.add(world,this.body)
    }
    display(){
        push();
        rectMode(CENTER);
        fill("lightgrey");
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        circle(0,0,this.width,this.height);
    
        pop();
    }
}