class Slime extends Enemy{
	constructor(x,y,imgw,imgh,h,w,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY){
		super(x,y,imgw,imgh,h,w,'slime','walk',hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
		this.directionX = Math.random() - .5  < 0 ? -1 : 1; 
	}	collideWTerrain(){

	    var posI = this.getIPosition();
	    var posJ = this.getJPosition();
	    // check if collide with close objects

	    for (var i = posI - 1; i <= posI + 1; i++)
	    {
	        for(var j = posJ - 1; j <= posJ + 1; j++)
	        {
	            if (i < 0 || i >= world.map['height'] || j < 0 || j >= world.map['width']) continue; // world ' out of bounds ' ?
	            var slime = this;
				world.level[i][j].forEach(function(terra){
					if ((terra.type == 'platform' || terra.type == 'mysticalBox') && slime.overlap(terra))
					{
						if(slime.posGridI < terra.posGridI && slime.posGridJ == terra.posGridJ)
						{
							slime.y = terra.y - slime.height - 1;
							slime.speedY = 0;
							slime.directionY = 0;
						}
						else if(slime.posGridI == terra.posGridI && slime.directionY == 0)
						{
							if (slime.posGridJ < terra.posGridJ)
							{
								slime.x = terra.x - slime.width - 1;
							}
							else
							{
								slime.x = terra.x + terra.width + 1;
							}
							slime.directionX *= -1;
						}
					}
				});
	        }
	    }
	    var terra = false;
	    if(!this.dead){
		    //check for any floor
		    if(posI >= world.map['height'] - 1) return;

		    if(posJ + this.directionX >= world.map['width'] || posJ + this.directionX < 0) {
		    	this.directionX *= -1;
		    	return;
		    }

		    if(posI + 1 < world.map['height'] && world.level[posI + 1][posJ + this.directionX].length > 0 && 
		    	(world.level[posI + 1][posJ + this.directionX][0].type == 'platform' || world.level[posI + 1][posJ + this.directionX][0].type == 'mysticalBox')
		          && world.level[posI + 1][posJ + this.directionX][0].y <= this.y + this.height + 1
		       ){
		        terra = true;
		    }
		    if(!terra &&
		    	((this.x <= world.level[posI + 1][posJ][0].x && this.directionX == -1)
		          ||(this.x + this.width >= world.level[posI + 1][posJ][0].x + world.level[posI + 1][posJ][0].width && this.directionX == 1)
		          )){
		        this.directionX *= -1;
		    }
		}
	}

	die(){
		super.die();
		//this.height /= 4;
	}

	//Enemy need static sound that will be created in init();

}
Images['slime'] = new Array();