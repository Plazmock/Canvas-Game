class Input{
	constructor() {
		this.keyPress = new Array();
		this.keyUp = new Array();
		this.keyDown = new Array();
	}
	clearKeys() {
		this.keyPress = [];
		this.keyUp = [];
	}
}

var input = new Input();
document.addEventListener('keydown', function(e) {
	console.log(e.key);
	input.keyPress[e.key] = true;
	input.keyDown[e.key] = true;
});
document.addEventListener('keyup', function(e) {
	input.keyDown[e.key] = false;
	input.keyUp[e.key] = true;
});