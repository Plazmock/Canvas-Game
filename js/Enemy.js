class Enemy extends Physics{
	constructor(x,y,imgw,imgh,h,w,type,state,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY){
		super(x,y,imgw,imgh,h,w,type,state,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
	}
	collideWithTerrain(x){};
	//Enemy need static sound that will be created in init();

}
// INTERFACE