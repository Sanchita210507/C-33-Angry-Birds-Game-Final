class Log extends BaseClass {
  constructor(x,y,height,angle){
    super(x,y,20,height,angle)
    
  //    var options = {
  //      'restitution':0.8,
  //      'friction':2.0,
  //      'density':0.5
  //  }
  // this.body = Bodies.rectangle(x, y, 20, height, options);
  // this.width = width
  // this.height = height 
  this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    
}
// display() {
    
//   var angle = this.body.angle;
//       push();
//       translate(this.body.position.x, this.body.position.y);
//       rotate(angle);
//       imageMode(CENTER);
//       image(this.image, 0, 0, 20, this.height);
//       pop();
// }


}