class CollisionBox extends Actor {
	constructor(x,y,imgw,imgh,h,w,type,state,hp){
		super(x,y,imgw,imgh,type,state);
		this.width = w;
		this.height = h;
		this.hp = hp;
		this.posGridI = this.getIPosition();
		this.posGridJ = this.getJPosition();
	}

	overlap(ob){
   		if (this.x + this.width < ob.x
	        || this.x > ob.x + ob.width
	        || this.y + this.height < ob.y
	        || this.y > ob.y + ob.height)

	        return false;

    	return true;
	}
	getIPosition(){
		return Math.floor((this.y + (this.height / 2)) / world.map['tileheight']);
	}
	getJPosition(){
		return Math.floor((this.x + (this.width / 2)) / world.map['tilewidth']);
	}
	updateGridPosition(){

		var newGridI = this.getIPosition();
    	var newGridJ = this.getJPosition();

     	if ((newGridI === this.posGridI && newGridJ === this.posGridJ)
        	|| newGridI < 0 || newGridI >= world.map['height']
       		|| newGridJ < 0 || newGridJ >= world.map['width']
        ) {
     		return false;
		}

		var k = world.level[this.posGridI][this.posGridJ].indexOf(this);
	    if(k > -1){
            world.level[this.posGridI][this.posGridJ].splice(k, 1);
            world.level[newGridI][newGridJ].push(this);
            this.posGridI = newGridI;
            this.posGridJ = newGridJ;
            return true;
	    }
	    return false;
	}
}

// INTERFACE