class Physics extends CollisionBox{
	constructor(x,y,imgw,imgh,h,w,type,state,hp, accelerationX, accelerationY, maxSpeedX, maxSpeedY){
		super(x,y,imgw,imgh,h,w,type,state,hp);
		this.accelerationX = accelerationX;
		this.accelerationY = accelerationY;
		this.speedY = 0;
		this.directionX = 0;
		this.directionY = 0;
		this.maxSpeedX = maxSpeedX;
		this.maxSpeedY = maxSpeedY;
	}
	updateSpeed(dt){

		this.speed = Math.min(this.speed + this.accelerationX*dt,this.maxSpeedX);
		this.speedY -= this.directionY*this.accelerationY*dt;
		if (this.speedY > this.maxSpeedY && this.directionY < 0) 
			this.speedY = this.maxSpeedY;
		if (this.speedY < 0) {
			this.directionY = -1;
			this.speedY = 0;
		}
		

	}
	move(dt){
		var moved = Math.min(Math.abs(this.speed*dt + this.accelerationX*dt*dt), this.maxSpeedX*dt);
		this.x += this.directionX*moved;
		if(this.x < 0) this.x = 0;
		if(this.x > world.map['canvasWidth'] - this.width){
			this.x = world.map['canvasWidth'] - this.width;
		}

		moved = Math.min(Math.abs(this.speedY*dt - this.accelerationY*dt*dt), this.maxSpeedY*dt);
		this.y -= this.directionY*moved;
		if(this.y < 0) {
			this.y = 0;
			this.speedY = 0;
			this.directionY = -1;
		}
		if(this.y > world.map['canvasHeight'] - this.height){ 
			this.y = world.map['canvasHeight'] - this.height;
			this.speedY = 0;
			this.directionY = 0;
		}
	}

	bounce(){
		this.directionY = 1;
		this.speedY = Math.max(this.speedY / 2, this.maxSpeedY / 3);
	}
}