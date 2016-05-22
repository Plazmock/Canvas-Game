class Player extends Physics{
	constructor(x,y,imgw,imgh,h,w,type,state,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY){
		super(x,y,imgw,imgh,h,w,type,state,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
	}
	handleInput(){

		// MOVING X
		if (input.keyDown['a'] || input.keyDown['ArrowLeft']){
			if(input.keyDown['d'] || input.keyDown['ArrowRight']) {
				input.keyDown['a'] = input.keyDown['ArrowLeft'] = false;
				return;
			}
			else if(!(input.keyPressed['a'] || input.keyPressed['ArrowLeft'])){
				this.directionX = -1;
				this.speed = 0;
				//this.acceleration = ??;
				//this.gravity = ??;
				this.state = 'walk';
			}

		}		
		if (input.keyDown['d'] || input.keyDown['ArrowRight']){
			if(input.keyDown['a'] || input.keyDown['ArrowLeft']) {
				input.keyDown['d'] = input.keyDown['ArrowRight'] = false;
				return;
			}
			else if(!(input.keyPressed['d'] || input.keyPressed['ArrowRight'])){
				this.directionX = 1;
				this.speed = 0;
				//this.acceleration = ??;
				//this.gravity = ??;
				this.state = 'walk';
			}


		}
		if (input.keyUp['d'] || input.keyUp['ArrowRight']){
			input.keyUp['d'] = input.keyUp['ArrowRight']  = false;
			if (!(input.keyDown['a'] || input.keyDown['ArrowLeft'])){
				this.speed = 0;
				this.directionX = 0;
				this.state = 'still';
			}
		}
		if (input.keyUp['a'] || input.keyUp['ArrowLeft']){
			input.keyUp['a'] = input.keyUp['ArrowLeft'] = false;
			if (!(input.keyDown['d'] || input.keyDown['ArrowRight'])){
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
Images['player']['walk'] = new Array();
