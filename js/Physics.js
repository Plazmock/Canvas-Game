class Physics extends CollisionBox{
	constructor(x,y,imgw,imgh,h,w,type,state,hp, acceleration, gravity, friction){
		super(x,y,imgw,imgh,h,w,type,state,hp);
		this.acceleration = acceleration;
		this.gravity = gravity;
		this.friction = friction;
	}
	move(dt){}
}