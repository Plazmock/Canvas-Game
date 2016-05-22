class CollisionBox extends Actor {
	constructor(x,y,imgw,imgh,h,w,type,state,hp){
		super(x,y,imgw,imgh,type,state);
		this.width = w;
		this.height = h;
		this.hp = hp;
	}
}
// INTERFACE