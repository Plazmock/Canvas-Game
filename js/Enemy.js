class Enemy extends Physics{
	constructor(x,y,imgw,imgh,h,w,type,state,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY){
		super(x,y,imgw,imgh,h,w,type,state,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
		this.dead = false;
		this.fallable = fallable;
	}
	collideWTerrain(){};
	//Enemy need static sound that will be created in init();
	die(){
		this.dead = true;
		this.bounce();
	};
}
// INTERFACE