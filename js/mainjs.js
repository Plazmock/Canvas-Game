var requestAnimFrame = (function(){
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function init(){// create world, load media, start main
	loadImages();
	loadSounds()
	initWorld();
	//Sounds['background'].play()
	Sounds['background'].addEventListener('ended', function() {
    	this.currentTime = 0;
    	this.play();
	}, false);
}

function initWorld(){
	// Create a World object path to the file, that keeps the paths to all the levels.
	world = new World("Config//configLevels.txt", 0);
	world.loadConfigFile();
	world.loadLevel();	
}

var lastTime,a;
function main(){
	var now = Date.now();
	var dt = (now - lastTime) / 1000.0;
	dt = Math.min(dt, 1.0 / 15);
	
	document.getElementById("canvas").getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
	var player = null;
	world.backgroundLayer[0].draw(dt);
	for(var i = 0; i < world.map.height; i++ ) {
		for(var j = 0; j < world.map.width; j++){
			
			world.level[i][j].forEach(function(obj){
				if(!PAUSED && obj.type != 'player'){
					obj.update(dt);
				}
				if(obj.type != 'player'){
					obj.draw(dt);
				}
				else{
					player = obj;
				}

			});
		}
	}
	if(!PAUSED && player){
		player.update(dt);
	}
	if (player){
		player.draw(dt);
	}

	drawHUD();

	if(PAUSED){
		drawPause();
	}	
	else if(WON || GAMEOVER){
		drawFinal();
	}

	lastTime = now;
	requestAnimFrame(main);
}

function loadImages(){
	try{
		var file = readFile("Config/configImage.txt", "arrayOfLines");
		if (!file){
			console.log("Cannot load images");
			return;
		}
		var type = "";
		var state ="";
		var i = 0;
		while (i < file.length) {
			type = file[i++];
			if (type == 'enemy')
				type = file[i++];	
			if(!Images[type]){
				//console.log("type "+ type);
				continue;
			}
			if (type == 'hud'){
				for(var k = 0; k < 10; k++){
					Images[type][k] = new Image();
					Images[type][k].src = file[i++];	
				}
			}
			while(file[i] != '>'){
				state = file[i++];
				//console.log("state "+ state);
				if (isNaN(file[i])) {
					Images[type][state] = new Image();
					Images[type][state].src = file[i++];
				}
				else{
					var n = parseInt(file[i++], 10);
					Images[type][state] = new Array();
					//console.log(n);
					for(var k = 0; k < n; k++){
						Images[type][state][k] = new Image();
						Images[type][state][k].src = file[i++];
					}
				}
			}
			i++;
		}
		console.log("Images loaded!");
	}catch(err){
		console.log("Could not load images!\n" + err.message);
	}
}

function loadSounds(){
	try{
		var file = readFile("Config/configSound.txt", "arrayOfLines");
		if (!file){
			console.log("Cannot load sounds");
			return;
		}
		var event,src;
		for(var i = 0; i < file.length; i+=2){
			event = file[i];
			src = file[i+1];
			Sounds[event] = new Audio(src);
		}

	}catch(err){
		console.log("Could not load sounds!\n" + err.message);
	}
}
