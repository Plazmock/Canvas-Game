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
	update_speed(dt){
		this.speed += this.directionX*this.accelerationX*dt;
		if (this.speed > this.maxSpeedX) 
			this.speed = this.maxSpeedX;
		//console.log("speed: "+this.speed);
		this.speedY += this.directionY*this.accelerationY*dt;
		if (this.speedY > this.maxSpeedY) 
			this.speedY = this.maxSpeedY;
	}
	move(dt){
		var moved = Math.min(this.speed*dt - this.accelerationX*dt*dt, this.maxSpeedX*dt);
		if (moved < 0) moved *= -1;
		this.x += this.directionX*moved;

		moved = Math.min(this.speedY*dt - this.accelerationY*dt*dt, this.maxSpeedY*dt);
		if (moved < 0) moved *= -1;
		this.y += this.directionY*moved;
	}
}