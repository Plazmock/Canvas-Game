class Spikes extends CollisionBox{
	constructor(x,y,imgw,imgh,h,w,state,hp){
		super(x,y,imgw,imgh,h,w,'spikes',state,hp);
	}	
	update(dt){
	};
	draw(dt){
		super.draw(dt);
	}
	
}
Images['spikes'] = new Array();