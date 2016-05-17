class Platform extends CollisionBox{
	constructor(x,y,imgw,imgh,h,w,type,state,hp){
		super(x,y,imgw,imgh,h,w,type,state,hp);
	}	
	collide(){};
	update(dt){
		if (input.keyDown['a'] === true) {
			this.x -= 5;
		}
		if (input.keyDown['d'] === true) {
			this.x += 5;
		}
	};
	
}
// static images