class Exit extends CollisionBox{
	constructor(x,y,imgw,imgh,h,w,state,hp){
		super(x,y,imgw,imgh,h,w,'exit',state,hp);
	}	
	
	update(dt){
		if(world.coinsRemaining <= 0){
			this.state = "midOpened"
		}
	};
	draw(dt){
		super.draw(dt);
		if(this.state === "midClosed"){
			this.drawarea.drawImage(Images["exit"]["topClosed"], this.x, this.y - world.map.tileheight+5, this.imgWidth, this.imgHeight);
		} else {
			this.drawarea.drawImage(Images["exit"]["topOpened"], this.x, this.y - world.map.tileheight+5, this.imgWidth, this.imgHeight);
		}
		console.log("asd");
	}
	
}
Images['exit'] = new Array();