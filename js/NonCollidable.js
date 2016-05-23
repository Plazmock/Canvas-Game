class NonCollidable extends Actor{
	constructor(x,y,imgw,imgh,state) {
		super.constructor(x,y,imgw,imgh,'nonCollidable',state);
	}
	
}
Images['nonCollidable'] = new Array();
// state = {'background', 'cloud'...}