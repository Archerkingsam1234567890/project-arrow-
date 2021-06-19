class ComputerArcher {
    constructor(x,y,width,height){
        var options={
            isStatic :true
        };

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.wwidth,this.height,options)
        this.image = loadImage("./assets/computerArcher.png");

        World.add(world,this.body);




    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        Matter.Body.setAngle(this.body, PI/2)
        image(this.image,0,0,this.width,this.height);
        pop();


    }
}