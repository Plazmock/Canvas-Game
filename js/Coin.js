class Coin extends CollisionBox{
	constructor(x,y,imgw,imgh,h,w,hp){
		super(x,y,imgw,imgh,h,w,'coin','spin',hp);
		this.taken = false;
	}
	draw(){
		if (this.taken) return;
		else super.draw();
	}
}
Images['coin'] = new Array();