class Player extends Physics{
	constructor(x,y,imgw,imgh,h,w,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY,jumpStartSpeed){
		super(x,y,imgw,imgh,h,w,'player','still',hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
		this.jumpStartSpeed = jumpStartSpeed;
		this.dead = false;
		this.completelyDead = false;
		this.timeSinceLastFrame = 0;
	}
	handleInput(){
		if(this.dead)  return;
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

	collideWTerrain(terra){
		if(this.posGridI < terra.posGridI){
	        if(this.posGridJ == terra.posGridJ){

	            this.y = terra.y - this.height - 1;
	            this.speedY = 0;
	            this.directionY = 0;
	        }
	        else if (this.posGridJ < terra.posGridJ && world.level[this.posGridI + 1][this.posGridJ].length == 0 || 
	        	(world.level[this.posGridI + 1][this.posGridJ].length > 0 &&
	        	!(world.level[this.posGridI + 1][this.posGridJ][0].type == 'platform' || world.level[this.posGridI + 1][this.posGridJ][0].type == 'mysticalBox'))){
	            //sound_events_to_play[player_colision] = true;
	            this.x = terra.x - this.width - 1;
	        }
	        else if (this.posGridJ > terra.posGridJ && world.level[this.posGridI - 1][this.posGridJ].length == 0 || 
	        	(world.level[this.posGridI + 1][this.posGridJ].length > 0 &&
	        	!(world.level[this.posGridI - 1][this.posGridJ][0].type == 'platform' || world.level[this.posGridI - 1][this.posGridJ][0].type == 'mysticalBox'))){
	           // sound_events_to_play[player_colision] = true;
	            this.x = terra.x + terra.width + 1;
	        }
	    }

	    else if(this.posGridI == terra.posGridI){
	        //sound_events_to_play[player_colision] = true;
	        if (this.posGridJ < terra.posGridJ){
	            this.x = terra.x - this.width - 1;
	        }
	        else{
	            this.x = terra.x + terra.width + 1;
	        }
	    }
	    else{
	       // sound_events_to_play[player_colision] = true;
	        if(this.posGridJ == terra.posGridJ){
	            this.y = terra.y + terra.width + 1;
	            this.speedY = 0;
	            this.directionY = -1;
	        }
	        else if (this.posGridJ < terra.posGridJ && world.level[this.posGridI - 1][this.posGridJ].length == 0 || 
	        	(world.level[this.posGridI + 1][this.posGridJ].length > 0 &&
	        	!(world.level[this.posGridI - 1][this.posGridJ][0].type == 'platform' || world.level[posGridI - 1][this.posGridJ][0].type == 'mysticalBox'))){
	            this.x = terra.x - this.width - 1;
	        }
	        else if (this.posGridJ > terra.posGridJ && world.level[this.posGridI - 1][this.posGridJ].length == 0 || 
	        	(world.level[this.posGridI + 1][this.posGridJ].length > 0 &&
	        	!(world.level[this.posGridI - 1][this.posGridJ][0].type == 'platform' || world.level[this.posGridI - 1][this.posGridJ][0].type == 'mysticalBox'))){
	            this.x = terra.x + terra.width + 1;
	        }
	    }


	}
	collideWEnemy(enemy){

		if (enemy.dead || this.dead) return;

		// if player attack enemy from above
		if (this.y + this.height < enemy.y + enemy.height){
			console.log("Enemy dies");
			enemy.die();
			//sound_events_to_play[player_jump] = true;
			
		}
		else{
			console.log("Player dies");
			this.die();
		}

	}
	getCoin(coin){
		if(!coin.taken){
			coin.taken = true;
			world.coinsRemaining--;
		}
	};

	die(){
		// lives--
		this.dead = true;
		this.state = 'dead';
		this.directionX = 0;
		this.bounce();
	}
	
	update(dt){
		this.handleInput();
		this.move(dt);
		this.checkCollisions();
		this.updateSpeed(dt);
		this.updateGridPosition();
	}

	draw(dt){

		if(this.state === 'walk'){
			this.timeSinceLastFrame += dt;
			if(this.timeSinceLastFrame > 0.075){
				this.frame += 1;
				this.frame %= Images['player'][this.state].length;
				//console.log(this.frame);
				this.timeSinceLastFrame -= 0.075;
			}	
		} 
		if(this.directionX === 1){
			this.drawarea.save();
			this.drawarea.scale(-1,1);
			this.x *= -1;
			this.x -= this.imgWidth;
		}

		super.draw(dt);

		if(this.directionX === 1){
			this.x += this.imgWidth;
			this.x *= -1;
			this.drawarea.restore();
		}	
			
	}

	

	checkCollisions(){

		var posI = this.getIPosition();
		var posJ = this.getJPosition();
    	var collide = false;

	    // check if collide with close objects
	    if(!this.dead){
		    for (var i = posI - 1; i <= posI + 1; i++){
		        for(var j = posJ - 1; j <= posJ + 1; j++){
		            if (i < 0 || i >= world.map['height'] || j < 0 || j >= world.map['width']) {continue;} // world ' out of bounds ' ?
					var player = this;
					world.level[i][j].forEach(function(actor){
						if (player.dead) {
							return;
						}
						if (!(player === actor) && actor instanceof CollisionBox && player.overlap(actor)){
							if (actor.type == 'platform'){
								player.collideWTerrain(actor);
							}
							if (actor instanceof Enemy){
								player.collideWEnemy(actor);
							}
							
							if (actor.type == 'coin'){
								player.getCoin(actor);
							}
	/*
							if (exit && !coins_to_collect){
								sound_events_to_play[exit_door] = true;
								end_level = true;
							}
	*/ 
						}
						
					});
		        }
		    }
		}
		else{
			var debug = 0;

		}
	    //check for any floor (not necessarily stable)
	    //

	    if(posI >= world.map['height'] - 1 || this.directionY != 0) return;

	    var floor = null;
	    if(posI + 1 < world.map['height'] && world.level[posI + 1][posJ].length > 0 && (world.level[posI + 1][posJ][0].type == 'platform' || world.level[posI + 1][posJ][0].type == 'mysticalBox')
	            && world.level[posI + 1][posJ][0].y <= this.y + this.height + 1)
	    {
	        floor = world.level[posI + 1][posJ][0];
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
