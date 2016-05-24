class Player extends Physics{
	constructor(x,y,imgw,imgh,h,w,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY,jumpStartSpeed){
		super(x,y,imgw,imgh,h,w,'player','still',hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
		this.jumpStartSpeed = jumpStartSpeed;
	}
	handleInput(){

		// MOVING X
		if (input.keyDown['a'] || input.keyDown['arrowleft']){
			if(input.keyPressed['d'] || input.keyPressed['arrowright']) {
				input.keyDown['a'] = input.keyDown['arrowleft'] = false;
			}
			else if(!(input.keyPressed['a'] || input.keyPressed['arrowleft'])){
				this.directionX = -1;
				//console.log("FUCKKKK 1");
				this.speed = 0;
				if(this.directionY == 0){
					this.state = 'walk';
				}
			}
			if(input.keyDown['a']) {input.keyPressed['a'] = true;}
			if(input.keyDown['arrowleft']) {input.keyPressed['arrowleft'] = true;}

		}	
		if (input.keyDown['d'] || input.keyDown['arrowright']){
			if(input.keyPressed['a'] || input.keyPressed['arrowleft']) {
				input.keyDown['d'] = input.keyDown['arrowright'] = false;
			}
			else if(!(input.keyPressed['d'] || input.keyPressed['arrowright'])){
				this.directionX = 1;
				//console.log("FUCKKKK 2");
				this.speed = 0;
				if(this.directionY == 0){
					this.state = 'walk';
				}
			}
			if(input.keyDown['d']) {input.keyPressed['d'] = true;}
			if(input.keyDown['arrowright']) {input.keyPressed['arrowright'] = true;}


		}
		if (input.keyUp['d'] || input.keyUp['arrowright']){
			input.keyUp['d'] = input.keyUp['arrowright']  = false;
			if (!(input.keyDown['a'] || input.keyDown['arrowleft'])){
				this.speed = 0;
				this.directionX = 0;
				if(this.directionY == 0)
					this.state = 'still';
			}
		}
		if (input.keyUp['a'] || input.keyUp['arrowleft']){
			input.keyUp['a'] = input.keyUp['arrowleft'] = false;
			if (!(input.keyDown['d'] || input.keyDown['arrowright'])){
				this.speed = 0;
				this.directionX = 0;
				if(this.directionY == 0)
					this.state = 'still';
			}
		}

		// MOVING Y

		if (input.keyDown['w'] || input.keyDown['arrowup']){
			//if(!(input.keyPressed['w'] || input.keyPressed['arrowup'])){
			if(this.directionY == 0){
				this.directionY = 1;
				this.speedY = this.jumpStartSpeed;
				this.state = 'jump';
			}
			//if(input.keyDown['w']) input.keyPressed['w'] = true;
			//if(input.keyDown['arrowup']) input.keyPressed['arrowup'] = true;
		}

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
