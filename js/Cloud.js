class Cloud extends NonCollidable{
	constructor(x,y,imgw,imgh,type,state) {
		super(x,y,imgw,imgh,type,state);
		this.frame = Math.floor((Images['nonCollidable']['cloud'].length-1)*Math.random());
		this.speed = Math.random()*55 + 15
		var scale = Math.random() + 0.1;
		this.startHeight = imgh;
		this.startWidth = imgw;
		this.imgHeight *= scale;
		this.imgWidth *= scale;
		this.y = Math.random()*300 + 10;	
		this.x = Math.random()*world.map['canvasWidth'] - 30;
		this.giantCloudSometimes();
	}
	update(dt){
		this.x += dt*this.speed;
		if (this.x > world.map['canvasWidth']){
			this.generateNew();
		}
	}
	generateNew(){
		this.frame = Math.floor((Images['nonCollidable']['cloud'].length-1)*Math.random());
		var scale = Math.random() + 0.1;
		this.imgHeight = this.startHeight * scale;
		this.imgWidth = this.startWidth * scale;
		this.x = -this.imgWidth;
		this.y = Math.random()*300 + 10;
		this.giantCloudSometimes()
	}
	giantCloudSometimes(){
		var chance = Math.random();
		if (chance < 0.09){
			this.imgWidth *= 2.37;
			this.imgHeight *= 2.37;
			this.x = -this.imgWidth;
		}
	}
}

Images['nonCollidable']['cloud'] = new Array();