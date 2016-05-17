class Enemy extends Physics{
	constructor(x,y,imgw,imgh,h,w,type,state,hp, acceleration, gravity, friction){
		super(x,y,imgw,imgh,h,w,type,state,hp, acceleration, gravity, friction);
	}
	collideWithTerrain(x){};
	//Enemy need static sound that will be created in init();

}