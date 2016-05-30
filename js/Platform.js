class Platform extends CollisionBox{
	constructor(x,y,imgw,imgh,h,w,state,hp){
		super(x,y,imgw,imgh,h,w,'platform',state,hp);
	}	
	collide(){};
	update(dt){};
	
}
Images['platform'] = new Array();