class Slime extends Enemy{
	constructor(x,y,imgw,imgh,h,w,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY){
		super(x,y,imgw,imgh,h,w,'slime','walk',hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY);
	}
	collideWTerrain(){

    	if (this.dead) return;

	    var posI,posJ;
	    var terra = null;
	    // check if collide with close objects
	    for (i = posI - 1; i <= posI + 1; i++)
	    {
	        for(j = posJ - 1; j <= posJ + 1; j++)
	        {
	            if (i < 0 || i >= GRID_HEIGHT || j < 0 || j >= GRID_WIDTH) continue; // world ' out of bounds ' ?
				for (actor in grid[i][j])
				{
					if ((actor.type == 'platform' || actor.type == 'mysticalBox') && this.overlap(actor))
					{
						terra = actor;
					/*	if(i_grid < terra -> i_grid && j_grid == terra -> j_grid)
						{
							pos_rect.y = real_y = terra -> pos_rect.y - pos_rect.h - 1;
							speed_y = 0;
							falling = false;
						}
						else if(i_grid == terra -> i_grid && !falling)
						{
							if (j_grid < terra -> j_grid)
							{
								pos_rect.x = real_x = terra -> pos_rect.x - pos_rect.w - 1;
							}
							else
							{
								pos_rect.x = real_x = terra -> pos_rect.x + terra -> pos_rect.w + 1;
							}
							direction *= -1;
						}*/
					}
				}
	        }
	    }
	    terra = null;
	    //check for any floor
	    if(posI >= GRID_HEIGHT - 1) return;

	    if(posI + 1 < GRID_HEIGHT && grid[posI + 1][posJ][0] && (grid[posI + 1][posJ][0].type == 'platform' || grid[posI + 1][posJ][0].type == 'mysticalBox')
	            && grid[posI + 1][posJ][0].y <= this.y + this.height + 1)
	    {
	        terra = grid[posI + 1][posJ][0];
	    }

	   /* if(!terra && !falling)//and type...fallable
	    {
	        falling = true;
	        speed_y = 0;
	    }else
	    */
	    if(!terra)//and type...!fallable
	    {
	        direction*=-1;
	    }
	    else if (terra)
	    {
	        this.y = terra.y - this.height - 1;
	        speedY = 0;
	        directionY = 0;
	    }

	}

	collideWPlayer(){
		
	}
	//Enemy need static sound that will be created in init();

}
Images['slime'] = new Array();