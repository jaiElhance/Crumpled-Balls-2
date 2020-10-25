class paper {
    constructor(){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(100,350,50,options);
        this.radius = 50;
        World.add(world,this.body);
        this.paper = loadImage("paper.png");
    }
    display(){

        var pos = this.body.position;
       //circle(pos.x,pos.y,this.radius)

        image(this.paper,pos.x,pos.y,50,50)
    }
}