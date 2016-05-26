class CollisionBox extends Actor {
	constructor(x,y,imgw,imgh,h,w,type,state,hp){
		super(x,y,imgw,imgh,type,state);
		this.width = w;
		this.height = h;
		this.hp = hp;
	}

	overlap(ob){
   		if (this.x + this.width < ob.x
	        || this.x > ob.x + ob.width
	        || this.y + this.height < ob.y
	        || this.y > ob.y + ob.height)

	        return false;

    	return true;
	}
}
// INTERFACE