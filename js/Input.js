class Input{
	constructor() {
		this.keyPressed = new Array();
		this.keyUp = new Array();
		this.keyDown = new Array();
	}
	clearKeys() {
		this.keyPress = {};
		this.keyUp = {};
	}
}

var input = new Input();

document.addEventListener('keydown', function(e) {
	//console.log(e.key);
	//input.keyPressed[e.key] = true;
	input.keyDown[e.key] = true;
	input.keyUp[e.key] = false;
});
document.addEventListener('keyup', function(e) {
	input.keyDown[e.key] = false;
	input.keyPressed[e.key] = false;
	input.keyUp[e.key] = true;
});