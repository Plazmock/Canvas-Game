class Spring extends CollisionBox{
	constructor(x,y,imgw,imgh,h,w,state,hp){
		super(x,y,imgw,imgh,h,w,'spring',state,hp);
		this.cooldown = 0.05d;
		this.cooldownRemaining = this.cooldown;
		this.canBaunce = false;
	}	
	update(dt){
		if(this.state === "down" && this.cooldownRemaining > 0){
			this.cooldownRemaining -= dt;
		} 
		else if(this.state === "down"){
			this.changeToUpState();
		}

	};

	changeToUpState(){
		this.state = "up";
	}
	changeToDownState(){
		this.state = "down";
		this.canBaunce = true;
		this.cooldownRemaining = this.cooldown;
	}
	
}
Images['spring'] = new Array();