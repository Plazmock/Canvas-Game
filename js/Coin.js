class Coin extends CollisionBox{
	constructor(x,y,imgw,imgh,h,w,hp){
		super(x,y,imgw,imgh,h,w,'coin','spin',hp);
		this.taken = false;
		this.timeSinceLastFrame = 0;
	}
	draw(dt){
		if (this.taken){
			return;
		} 
		else {
			this.timeSinceLastFrame += dt;
			if(this.timeSinceLastFrame > 0.1){
				this.frame += 1;
				this.frame %= Images['coin']['spin'].length;
				this.timeSinceLastFrame -= 0.1;
			}
			super.draw(dt);
		}
	}
}
Images['coin'] = new Array();