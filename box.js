class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity=255;
      World.add(world, this.body);
    }
    display(){
    
    console.log(this.body.speed)
     if(this.body.speed<3){
      super.display
     } 
      
      else{

World.remove(World,this.body)
push()
this.visiblity-this.visiblity-5;
tint(255,this.visiblity)
Image(this.image,this.body.position.X,this.position.Y,50,50)
pop()



      }
      
      
      
      
      
      
      
  
      var angle = this.body.angle;
      var pos =this.body.position;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    
    
    
    
    
    
    
    
    
    
    
    
    }
  };
  