class Player extends Physics{
	constructor(x,y,imgw,imgh,h,w,type,state,hp, acceleration, gravity, friction){
		super(x,y,imgw,imgh,h,w,type,state,hp, acceleration, gravity, friction);
	}
	handleInput(){};
	collideWithTerrain(x){};
	//Player need static sound that will be created in init();

}