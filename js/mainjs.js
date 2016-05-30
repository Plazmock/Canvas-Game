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
	initWorld();
	//loadSounds();
	// new world

}

function initWorld(){
	// Create a World object path to the file, that keeps the paths to all the levels.
	world = new World("Config//configLevels.txt", 0);
	world.loadConfigFile();
	world.loadLevel();
	// TestFileReading
	/*
	fr = new TextReader();
	fr.readFile("Config//configLevels.txt");
	*/
		
}

var lastTime,a;
function main(){
	var now = Date.now();
	var dt = (now - lastTime) / 1000.0;
	
	document.getElementById("canvas").getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < a.length; i++){
		a[i].update(dt);
		a[i].draw();
	}
// level - > load next lvl if curr completed
// menu ? 
	for(var i = 0; i < world.map.height; i++ ) {
		for(var j = 0; j < world.map.width; j++){
			for(var k = 0; k < world.level[i][j].length; k++){
				if( world.level[i][j][k] != null){
					console.log(world.level[i][j][k]);
					world.level[i][j][k].update(dt);
					world.level[i][j][k].draw();
				}
			}
		}
	}	

/*	
	draw();
*/
	lastTime = now;
	input.clearKeys();
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
					//console.log(file[i]);
				}
			}
			i++;
		}
		console.log("Images loaded!");
	}catch(err){
		console.log("Could not load images!\n" + err.message);
	}
} 