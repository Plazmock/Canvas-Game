class Player extends Physics{
	constructor(x,y,imgw,imgh,h,w,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY,jumpStartSpeed){
		super(x,y,imgw,imgh,h,w,'player','still',hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
		this.jumpStartSpeed = jumpStartSpeed;
		this.dead = false;
		this.completelyDead = false;
	}
	handleInput(){

		// MOVING X
		if (input.keyDown['a'] || input.keyDown['arrowleft']){
			if(input.keyPressed['d'] || input.keyPressed['arrowright']) {
				input.keyDown['a'] = input.keyDown['arrowleft'] = false;
			}
			else if(!(input.keyPressed['a'] || input.keyPressed['arrowleft'])){
				this.directionX = -1;
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

	collideWTerrain(terrain){};
	collideWEnemy(enemy){

		if (enemy.dead) return;

		// if player attack enemy from above
		if (this.y + this.height < enemy.y + enemy.height){
			enemy.die();
			sound_events_to_play[player_jump] = true;
			
		}
		else{
			this.die();
		}

	}
	getCoin(coin){};

	die(){
		// lives--
		this.bounce();
	}
	
	update(dt){
		this.handleInput();
		this.move(dt);
		//this.checkCollisions();
		this.update_speed(dt);
	}

	checkCollisions(){
		if(!this.dead) return;

		var posI,posJ;
    	var collide = false;

	    // check if collide with close objects
	    for (i = posI - 1; i <= posI + 1; i++){
	        for(j = posJ - 1; j <= posJ + 1; j++){
	            if (i < 0 || i >= GRID_HEIGHT || j < 0 || j >= GRID_WIDTH) continue; // world ' out of bounds ' ?
				
				for (actor in grid[i][j]){

					if (this == actor || !(actor instanceof CollisionBox)) continue;

					if (this.overlap(actor)){
						if (actor.type == 'platform'){
							this.collideWTerrain(actor);
						}
						if (actor.type == 'coin'){
							this.getCoin(actor);
						}
						if (actor instanceof Enemy){
							this.collideWEnemy();
							if (this.dead) reaturn; //////////
						}
/*
						if (exit && !coins_to_collect){
							sound_events_to_play[exit_door] = true;
							end_level = true;
						}
*/
					}
					
				}
	        }
	    }
	    //check for any floor (not necessarily stable)
	    //

	    if(this.dead || posI >= GRID_HEIGHT - 1 || this.directionY != 0) return;

	    var floor = NULL;
	    if(posI + 1 < GRID_HEIGHT && grid[posI + 1][posJ][0] && (grid[posI + 1][posJ][0].type == 'platform' || grid[posI + 1][posJ][0].type == 'mysticalBox')
	            && grid[posI + 1][posJ][0].y <= this.y + this.height + 1)
	    {
	        floor = grid[posI + 1][posJ][0];
	    }
	    if(!floor && this.directionY == 0)
	    {
	        this.speedY = 0;
	        this.directionY = -1;
	    }
	    else if (floor)
	    {
	        this.y = floor.y - this.height - 1;
	        this.speedY = 0;
	    }
	}

}

Images['player'] = new Array();
