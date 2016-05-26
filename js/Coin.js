class Coin extends CollisionBox{
	constructor(x,y,imgw,imgh,h,w,hp){
		super(x,y,imgw,imgh,h,w,'coin','spin',state,hp);
		this.taken = false;
	}
}
Images['coin'] = new Array();