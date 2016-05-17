class World {
	//var frame,type,speed,images,x,y;
	constructor(levelsPath, currLevel) {
		this.currLevel = currLevel;
		console.log(levelsPath);
	}
	draw(){
		this.drawarea.fillRect(this.x,this.y,150,100); 
		//this.x += 5;
		//this.y += 5;
		//console.log(""+this.x);
	}
	update(dt){

		if (input.keyDown['ArrowRight'] === true) {
			this.x += 30;
		}
		if (input.keyDown['ArrowLeft'] === true) {
			this.x -= 30;
		}
	}
	translate(x,y){
		this.x += x;
		this.y += y;
	}

}

// Needs static images
