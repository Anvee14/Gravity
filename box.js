class Box {
    
  constructor(x,y,w,h){
    var options = {
    friction: 0.5,
    restitution: 0.5,
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

}
    
     display() {
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("yellow");
        fill("red");
        rect(0, 0, this.w, this.h);
        pop();
    }
}