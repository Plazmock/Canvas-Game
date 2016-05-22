class Slime extends Enemy{
	constructor(x,y,imgw,imgh,h,w,type,state,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY){
		super(x,y,imgw,imgh,h,w,type,state,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
	}
	collideWithTerrain(x){};
	//Enemy need static sound that will be created in init();

}
Images['slime'] = new Array();