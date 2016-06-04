class Actor {
	//var frame,type,speed,images,x,y;
	constructor(x,y,imgw,imgh,type,state) {
		this.frame = 0;
		this.type = type;
		this.state = state;
		this.speed = 0;
		this.x = x;
		this.y = y;
		this.imgWidth = imgw;
		this.imgHeight = imgh;
		this.drawarea = (document.getElementById("canvas")).getContext("2d");
	}
	draw(dt){

		if(Images[this.type] && Images[this.type][this.state] && !Array.isArray(Images[this.type][this.state])) 
			this.drawarea.drawImage(Images[this.type][this.state], this.x, this.y, this.imgWidth, this.imgHeight);
		else if(Images[this.type] && Images[this.type][this.state] && Array.isArray(Images[this.type][this.state])) 
			this.drawarea.drawImage(Images[this.type][this.state][this.frame % Images[this.type][this.state].length], this.x, this.y, this.imgWidth, this.imgHeight);			
	}
	update(dt){

	}

}
Images = new Array();

