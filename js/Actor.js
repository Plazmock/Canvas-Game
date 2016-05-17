class Actor {
	//var frame,type,speed,images,x,y;
	constructor(x,y,imgw,imgh,type) {
		this.frame = 1;
		this.type = type;
		this.speed = 0;
		this.x=x;
		this.y=y;
		this.imgWidth = imgw;
		this.imgHeight = imgh;
		this.drawarea = (document.getElementById("canvas")).getContext("2d");
	}
	draw(){
		this.drawarea.fillRect(this.x,this.y,150,100); 
		//this.x += 5;
		//this.y += 5;
		//console.log(""+this.x);
	}
	update(dt){

		if (input.keyDown['ArrowRight'] === true) {
			console.log("asda");
			this.x += 30;
		}
		if (input.keyDown['ArrowLeft'] === true) {
			console.log("asda");
			this.x -= 30;
		}
	}
	translate(x,y){
		this.x += x;
		this.y += y;
	}

}

// Needs static images
