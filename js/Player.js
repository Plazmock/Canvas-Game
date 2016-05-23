class Player extends Physics{
	constructor(x,y,imgw,imgh,h,w,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY){
		super(x,y,imgw,imgh,h,w,'player','still',hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
	}
	handleInput(){

		// MOVING X
		if (input.keyDown['a'] || input.keyDown['arrowleft']){
			if(input.keyDown['d'] || input.keyDown['arrowright']) {
				input.keyDown['a'] = input.keyDown['arrowleft'] = false;
				return;
			}
			else if(!(input.keyPressed['a'] || input.keyPressed['arrowleft'])){
				this.directionX = -1;
				this.speed = 0;
				//this.acceleration = ??;
				//this.gravity = ??;
				this.state = 'walk';
			}

		}	
		if (input.keyDown['d'] || input.keyDown['arrowright']){
			if(input.keyDown['a'] || input.keyDown['arrowleft']) {
				input.keyDown['d'] = input.keyDown['arrowright'] = false;
				return;
			}
			else if(!(input.keyPressed['d'] || input.keyPressed['arrowright'])){
				this.directionX = 1;
				this.speed = 0;
				//this.acceleration = ??;
				//this.gravity = ??;
				this.state = 'walk';
			}


		}
		if (input.keyUp['d'] || input.keyUp['arrowright']){
			input.keyUp['d'] = input.keyUp['arrowright']  = false;
			if (!(input.keyDown['a'] || input.keyDown['arrowleft'])){
				this.speed = 0;
				this.directionX = 0;
				this.state = 'still';
			}
		}
		if (input.keyUp['a'] || input.keyUp['arrowleft']){
			input.keyUp['a'] = input.keyUp['arrowleft'] = false;
			if (!(input.keyDown['d'] || input.keyDown['arrowright'])){
				this.speed = 0;
				this.directionX = 0;
				this.state = 'still';
			}
		}

		// MOVING Y

	}

	collideWithTerrain(x){};
	
	update(dt){
		this.handleInput();
		this.move(dt);
		this.update_speed(dt);

	}

	//Player need static sound that will be created in init();


}
Images['player'] = new Array();
