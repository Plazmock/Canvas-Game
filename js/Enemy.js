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
		this.bounce();
	}
	update(dt){
		this.move(dt);
		//this.collideWTerrain();
		this.updateSpeed(dt);
		this.updateGridPosition();
	}
}
// INTERFACE