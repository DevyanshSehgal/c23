class box{
    constructor(x,y,width,height){
        var ball_options ={
            restitution: 1.0,
            friction: 0.8,
            density: 1.8
        }
    
        this.ball = Bodies.rectangle(x,y,width,height, ball_options);
      this.width=width 
      this.height=height
        World.add(world,this.ball);
    }
   show(){
      var yo=this.ball.position
      var print=this.ball.angle
      push()
      translate(yo.x,yo.y)
      rotate(print);
    rectMode(CENTER);
    fill("Pink");
    rect(0,0, this.width,this.height);
    pop();
}
}



