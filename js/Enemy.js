class Enemy extends Physics{
	constructor(x,y,imgw,imgh,h,w,type,state,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY){
		super(x,y,imgw,imgh,h,w,type,state,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
		this.dead = false;
		this.fallable = false;
	}
	collideWTerrain(){};
	//Enemy need static sound that will be created in init();
	die(){
		this.dead = true;
		this.directionX = 0;
		this.bounce();
	}
	update(dt){
		this.move(dt);
		if(this.x >= world.map['canvasWidth'] - this.width - 1 || this.x <= 1){
			this.directionX *= -1;
		}
		this.collideWTerrain();
		this.updateSpeed(dt);
		this.updateGridPosition();
	}
}
// INTERFACE